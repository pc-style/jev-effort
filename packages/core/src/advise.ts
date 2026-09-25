// Agent-agnostic turn advice. Adapters (Claude Code, Codex, Cursor, Amp, …) do
// the I/O for their host; this module owns classification, per-session state,
// the in-context directive and the "switch effort" nudge.
import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { classify, LEVELS, type Decision, type Level } from "./jev.ts";

const DIRECTIVES: Record<Level, string> = {
  low: "Treat this as a quick, in-the-loop turn: do the direct thing, keep verification light, don't widen scope, and hand back early so the user can steer.",
  medium:
    "Treat this as regular engineering work: implement cleanly and run the obvious checks (typecheck, the tests you touched) before reporting.",
  high: "Verification matters on this turn: reproduce before changing code, test the edge cases, and confirm a new test would have failed without the fix.",
  xhigh:
    "This turn is edge-case heavy: adversarially review your first draft, test against an independent reference or randomized inputs, and check that half-finished fixes fail your tests.",
  max: "Work autonomously end to end on this turn: make the judgement calls yourself, verify exhaustively (fuzzing, reference implementations, adversarial review), and only stop when it is demonstrably done.",
};

const HISTORY = 4;

type SessionState = { prompts: string[]; effort?: Level };

export type AdviseOptions = {
  /** Directory for per-session state and decisions.jsonl. */
  dataDir: string;
  sessionId: string;
  /** How the host spells an effort change, e.g. (l) => `/effort ${l}`. Omit if the host has none. */
  effortCommand?: (level: Level) => string;
  /** Effort the host reports for this turn, if it exposes one on prompt submit. */
  currentEffort?: Level;
  env?: NodeJS.ProcessEnv;
};

export type Advice = {
  decision: Decision;
  /** Text to inject into the model's context for this turn. */
  context: string;
  /** Short user-facing line suggesting an effort change, when the gap is large. */
  nudge?: string;
};

export function isLevel(value: unknown): value is Level {
  return typeof value === "string" && (LEVELS as readonly string[]).includes(value);
}

function stateFile(opts: AdviseOptions) {
  return join(opts.dataDir, `session-${opts.sessionId.replace(/[^\w-]/g, "")}.json`);
}

async function readState(opts: AdviseOptions): Promise<SessionState> {
  return readFile(stateFile(opts), "utf8")
    .then((raw) => JSON.parse(raw) as SessionState)
    .catch(() => ({ prompts: [] }));
}

/** Remember the effort level the host actually ran at (for hosts that only report it after a turn). */
export async function recordEffort(level: Level, opts: AdviseOptions) {
  await mkdir(opts.dataDir, { recursive: true });
  const state = await readState(opts);
  if (state.effort !== level) await writeFile(stateFile(opts), JSON.stringify({ ...state, effort: level }));
}

/** Classify a prompt and build the advice. Returns undefined when disabled, unconfigured or on failure. */
export async function advise(prompt: string, opts: AdviseOptions): Promise<Advice | undefined> {
  const env = opts.env ?? process.env;
  if (env.JEV_EFFORT_DISABLE === "1") return;
  prompt = prompt.trim();
  if (!prompt || prompt.startsWith("/")) return;

  await mkdir(opts.dataDir, { recursive: true });
  const state = await readState(opts);
  const current = opts.currentEffort ?? state.effort;

  let decision: Decision | undefined;
  try {
    decision = await classify(
      {
        prompt: prompt.slice(0, 8_000),
        recentPrompts: state.prompts.map((p) => p.slice(0, 1_000)),
        currentEffort: current,
      },
      { timeoutMs: Number(env.JEV_EFFORT_TIMEOUT_MS ?? 6_000), env },
    );
  } catch (err) {
    // Never block the user's prompt on a classifier failure.
    await log(opts.dataDir, { session: opts.sessionId, error: String(err) });
    return;
  }
  await writeFile(stateFile(opts), JSON.stringify({ ...state, prompts: [...state.prompts, prompt].slice(-HISTORY) }));
  if (!decision) return; // no provider key configured

  await log(opts.dataDir, { session: opts.sessionId, current, ...decision });

  const gap = current ? LEVELS.indexOf(decision.level) - LEVELS.indexOf(current) : 0;
  const bigGap = Math.abs(gap) >= Number(env.JEV_EFFORT_NUDGE_GAP ?? 2);
  const command = opts.effortCommand?.(decision.level);

  const lines = [
    `[jev-effort] This turn was classified as ${decision.level}-effort work` +
      (current ? ` (session effort is ${current}).` : "."),
    DIRECTIVES[decision.level],
  ];
  if (bigGap) {
    lines.push(
      gap > 0
        ? "The session is running well below what this task needs; be extra deliberate about verification" +
            (command ? `, and mention once that ${command} would suit this task.` : ".")
        : "The session is running well above what this task needs; don't over-verify or expand scope.",
    );
  }

  const nudge =
    bigGap && command && env.JEV_EFFORT_QUIET !== "1"
      ? `jev-effort: looks like ${decision.level}-effort work (now ${current}) — ${command}`
      : undefined;

  return { decision, context: lines.join("\n"), nudge };
}

async function log(dir: string, entry: Record<string, unknown>) {
  await appendFile(join(dir, "decisions.jsonl"), JSON.stringify({ at: new Date().toISOString(), ...entry }) + "\n").catch(
    () => {},
  );
}
