import { experimental_evaluate as evaluate, type Experimental_EvaluationModel } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { createTypeSafeAi } from "@ai-sdk/typesafe-ai";

export const LEVELS = ["low", "medium", "high", "xhigh", "max"] as const;
export type Level = (typeof LEVELS)[number];

export type ProviderName = "gateway" | "openrouter" | "typesafe";

/**
 * Pick a Jev backend. Explicit JEV_PROVIDER wins; otherwise the first provider
 * with a key in the environment is used (gateway → openrouter → typesafe).
 */
export function resolveModel(env = process.env): { provider: ProviderName; model: Experimental_EvaluationModel } | undefined {
  const wanted = env.JEV_PROVIDER as ProviderName | undefined;
  const has = {
    gateway: Boolean(env.AI_GATEWAY_API_KEY || env.VERCEL_OIDC_TOKEN),
    openrouter: Boolean(env.OPENROUTER_API_KEY),
    typesafe: Boolean(env.TYPESAFE_AI_API_KEY || env.TYPESAFE_API_KEY),
  };
  const provider = wanted ?? (["gateway", "openrouter", "typesafe"] as const).find((p) => has[p]);
  if (!provider || !has[provider]) return undefined;

  switch (provider) {
    case "gateway":
      return { provider, model: gateway.evaluationModel((env.JEV_MODEL ?? "typesafe-ai/jev") as never) };
    case "openrouter":
      // OpenRouter exposes TypeSafe's System One API at /api/v1/systemone.
      return {
        provider,
        model: createTypeSafeAi({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: env.OPENROUTER_API_KEY,
          headers: { "X-Title": "jev-effort (Claude Code plugin)" },
        }).evaluationModel(env.JEV_MODEL ?? "typesafe/jev-1.13"),
      };
    case "typesafe":
      return {
        provider,
        model: createTypeSafeAi({ apiKey: env.TYPESAFE_AI_API_KEY ?? env.TYPESAFE_API_KEY }).evaluationModel(
          env.JEV_MODEL ?? "jev-latest",
        ),
      };
  }
}

export type ThreadState = {
  /** The prompt the user just sent. */
  prompt: string;
  /** A few earlier user prompts in this thread, oldest first. */
  recentPrompts: string[];
  /** Effort the previous turn ran at, if known. */
  currentEffort?: Level;
};

// Rubric follows Thariq's "Spending your effort" guidance: low keeps the user
// in the loop, medium is regular feature work, high is verification / edge
// cases, max is fully autonomous or security-critical work.
const QUESTIONS = {
  effort: {
    type: "score",
    instructions:
      "How much independent verification, edge-case testing and autonomous judgement does the coding agent need to spend on `prompt`, given the thread so far in `recentPrompts`?",
    criteria: [
      "low: quick in-the-loop reply — brainstorming, questions, sketching, an easy or mechanical change, a follow-up tweak",
      "medium: regular software engineering — implementing a new feature or a well-specified change",
      "high: verification matters or there are hidden edge cases — debugging a brownfield codebase, code review, writing tests, performance work",
      "xhigh: hard, edge-case-heavy work — concurrency, parsers, sanitizers, data migrations, hardware or ML correctness",
      "max: fully autonomous end-to-end build and verification with no user input, or hunting security vulnerabilities in critical software",
    ],
  },
  wants_loop: {
    type: "boolean",
    instructions:
      "The user wants a fast answer or a rough first pass so they can stay in the loop and iterate, rather than a finished, thoroughly verified result.",
  },
  autonomous: {
    type: "boolean",
    instructions:
      "The user explicitly asks the agent to work on its own for a long time without checking in, or to be exhaustive / as thorough as possible.",
  },
} as const;

export type Decision = {
  level: Level;
  score: number;
  confidence?: number;
  wantsLoop: number;
  autonomous: number;
  provider: ProviderName;
};

export async function classify(
  state: ThreadState,
  opts: { timeoutMs?: number; env?: NodeJS.ProcessEnv } = {},
): Promise<Decision | undefined> {
  const resolved = resolveModel(opts.env);
  if (!resolved) return undefined;

  const result = await evaluate({
    model: resolved.model,
    // evaluate() rejects undefined values, so drop unset fields.
    state: JSON.parse(JSON.stringify(state)),
    questions: QUESTIONS,
    maxRetries: 0,
    abortSignal: AbortSignal.timeout(opts.timeoutMs ?? 6_000),
  });

  const { effort, wants_loop, autonomous } = result.answers;
  let score = effort.score;
  // Nudge the rubric position with the two direct signals, then round.
  if (wants_loop.probability >= 0.8) score -= 0.75;
  if (autonomous.probability >= 0.9) score += 0.75;
  const index = Math.max(0, Math.min(LEVELS.length - 1, Math.round(score)));

  const confidence = (result.providerMetadata?.typesafe as { confidence?: Record<string, number> } | undefined)
    ?.confidence?.effort;

  return {
    level: LEVELS[index]!,
    score: effort.score,
    confidence,
    wantsLoop: wants_loop.probability,
    autonomous: autonomous.probability,
    provider: resolved.provider,
  };
}
