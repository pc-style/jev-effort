# jev-effort

Per-turn reasoning effort for coding agents. Every prompt goes through [Jev](https://docs.typesafe.ai), TypeSafe's System One decision model, which returns typed probabilities rather than text. The result is used to steer how much verification and judgement the agent spends on that turn, following the rule of thumb from [Spending your effort](https://claude.dev/blog/spending-your-effort/):

| level | when |
| --- | --- |
| low | in-the-loop: questions, brainstorming, sketches, easy edits |
| medium | regular feature work |
| high | verification / edge cases: brownfield bugs, review, tests |
| xhigh | edge-case-heavy: parsers, sanitizers, concurrency, migrations |
| max | fully autonomous end-to-end work, security audits |

Jev runs through the AI SDK's `experimental_evaluate`, on **Vercel AI Gateway**, **OpenRouter** or **TypeSafe** directly. It costs about $0.00002 per prompt, since Jev bills input tokens only.

## Agents

| agent | status | path |
| --- | --- | --- |
| Claude Code | ✅ | [`plugins/claude-code`](plugins/claude-code) |
| Codex CLI | ✅ | [`plugins/codex`](plugins/codex) |
| Cursor | ✅ | [`plugins/cursor`](plugins/cursor) |
| Amp | ✅ | [`plugins/amp`](plugins/amp) |

## Install (Claude Code)

```
/plugin marketplace add pc-style/jev-effort
/plugin install jev-effort@jev-effort
```

Then set one provider key in the environment Claude Code runs in:

| provider | env | default model |
| --- | --- | --- |
| Vercel AI Gateway | `AI_GATEWAY_API_KEY` (or `VERCEL_OIDC_TOKEN`) | `typesafe-ai/jev` |
| OpenRouter | `OPENROUTER_API_KEY` | `typesafe/jev-1.13` |
| TypeSafe | `TYPESAFE_AI_API_KEY` or `TYPESAFE_API_KEY` | `jev-latest` |

The first key found wins, or force one with `JEV_PROVIDER=gateway|openrouter|typesafe`.

## Install (Amp)

Build the standalone Amp plugin, then copy it to your user plugins directory:

```sh
bun install
bun run build
mkdir -p ~/.config/amp/plugins
cp .amp/plugins/jev-effort.js ~/.config/amp/plugins/jev-effort.js
```

Reload plugins in Amp (or start a new session). The built file is also a project plugin in this repository, so Amp loads it here without the copy. To use it only in a different project, copy the file to that project's `.amp/plugins/` instead.

Amp's `agent.start` hook classifies each submitted prompt and adds the resulting directive to that turn's context. Amp does not offer a hook to change an existing thread's model or reasoning effort, so this plugin does not switch modes or suggest an effort command. Set one of the provider keys above in the environment Amp runs in. State and decision logs go to `~/.config/amp/jev-effort/`; without a key (or when disabled or classification fails), it adds no context and lets the turn proceed.

### What it does in Claude Code

- **`UserPromptSubmit`**: sends the prompt and the last few prompts in the thread to Jev. Jev answers a 5-level `score` rubric plus two yes/no questions: "does the user want to stay in the loop?" and "does the user want autonomous work?". The hook then adds a short directive for the turn to Claude's context, for example "reproduce before changing code, test the edge cases…".
- **`Stop`**: records the session's real effort level. Prompt-submit input doesn't include it, but `Stop` input does. When the classified level is ≥2 steps away from it, you get a one-line `/effort <level>` suggestion.
- If Jev fails, times out or has no key, the hook exits silently. It never blocks a prompt.

**Why it doesn't flip `/effort` itself:** Claude Code has no hook output that sets effort. Writing `effortLevel` into settings mid-session didn't change the running session either, as measured with hook-reported `effort.level` in headless sessions on v2.1.282. So the plugin steers in context, which the model follows within its effort setting, and leaves the level change to you.

## Install (Cursor)

Requires Node.js on `PATH`. From this checkout, symlink the adapter into Cursor's local plugin directory:

```sh
bun install
bun run build
mkdir -p ~/.cursor/plugins/local
ln -sfn "$PWD/plugins/cursor" ~/.cursor/plugins/local/jev-effort
```

Or add this repo as a marketplace; the manifest is [`.cursor-plugin/marketplace.json`](.cursor-plugin/marketplace.json). Restart Cursor after installing. Set one of the provider keys listed above in the environment Cursor's hooks run in.

### What it does in Cursor

- **`beforeSubmitPrompt`** classifies the prompt through the shared Jev core and injects the turn directive as `additional_context`. When the model picker sends an `effort` param (`low`, `medium`, `high`, `xhigh`, `max`), that is the session level.
- A gap of two or more levels is included in that directive, asking the model to mention setting the picker effort, and returned as `user_message`. Cursor has no hook output that changes the picker, so the level change stays with you.
- Missing credentials, invalid input, classifier failures and storage errors exit silently without blocking the prompt.

State and decision logs go to `~/.cursor/jev-effort/`.

## Install (Codex CLI)

Requires Node.js on `PATH` and Codex with plugin hooks (validated with CLI 0.157.0).
From this checkout:

```sh
codex plugin marketplace add .
codex plugin add jev-effort@jev-effort
```

Start a new Codex session, open `/hooks`, and review and trust the plugin hook.
Set one of the provider keys listed above in the environment that starts Codex.
The bundled adapter needs no Bun or `node_modules` at runtime.

### What it does in Codex

- **`UserPromptSubmit`** classifies the prompt through the shared Jev core and injects per-turn guidance as `additionalContext`.
- Codex's documented hook input does not expose current reasoning effort, and hook output cannot change it. Change the setting yourself using Codex's model controls.
- There is no `Stop` hook or effort-gap nudge on Codex. Jev's `max` is a classification label, not a model setting.
- Missing credentials, invalid input, classifier failures and storage errors exit silently without blocking the prompt.

The hook sends the current prompt (up to 8,000 characters) and up to four recent prompts (1,000 characters each) to the configured Jev provider. The shared core retains the last four prompts in local session state. Codex stores this under `$PLUGIN_DATA`, falling back to `$CLAUDE_PLUGIN_DATA`, then `${CODEX_HOME:-~/.codex}/jev-effort`.

Contracts: [Codex hooks](https://developers.openai.com/codex/hooks), [plugin packaging](https://developers.openai.com/plugins/build/plugins).

## Configuration

| env | default | |
| --- | --- | --- |
| `JEV_PROVIDER` | auto | `gateway`, `openrouter` or `typesafe` |
| `JEV_MODEL` | per provider | override the Jev model id |
| `JEV_EFFORT_TIMEOUT_MS` | `6000` | classifier timeout |
| `JEV_EFFORT_NUDGE_GAP` | `2` | level gap before suggesting an effort change |
| `JEV_EFFORT_QUIET` | – | `1` = no user-facing suggestion |
| `JEV_EFFORT_DISABLE` | – | `1` = off |

Decisions are logged to `decisions.jsonl` in the plugin data dir (`$CLAUDE_PLUGIN_DATA` for Claude Code, `~/.cursor/jev-effort` for Cursor, `$PLUGIN_DATA` for Codex). Nudge settings only apply to adapters that receive the current effort level.

## Layout

```
packages/core/          agent-agnostic: Jev classifier, turn advice, session state
  src/jev.ts            provider resolution + experimental_evaluate call
  src/advise.ts         advise() / recordEffort(): directive text, nudges, history
  src/cli.ts            bun run classify "<prompt>" …
plugins/claude-code/    Claude Code adapter (hooks → dist/hook.mjs)
plugins/cursor/         Cursor adapter (beforeSubmitPrompt → dist/hook.mjs)
plugins/codex/          Codex adapter (UserPromptSubmit → dist/hook.mjs)
.agents/plugins/       Codex marketplace manifest
plugins/amp/            Amp adapter (agent.start → .amp/plugins/jev-effort.js)
.claude-plugin/         Claude Code marketplace manifest
.cursor-plugin/         Cursor marketplace manifest
```

### Adding an agent

An adapter is a thin shim that maps the host's hook I/O onto core:

```ts
import { advise, recordEffort, isLevel } from "@jev-effort/core";

const advice = await advise(prompt, {
  dataDir,                       // host's per-plugin data dir
  sessionId,                     // host's session / thread id
  effortCommand: (l) => `…`,     // how the host changes effort, or omit
  currentEffort,                 // if the host reports it at prompt time
});
// inject advice.context into the model's context; show advice.nudge to the user
```

If the host only reports effort after a turn, as Claude Code does, call `recordEffort(level, opts)` from that hook. Adapters bundle with `bun build`, so installed plugins need no `node_modules`.

Things to check per host:
- **Codex CLI:** uses `UserPromptSubmit` and `additionalContext`; the hook contract cannot read or set `model_reasoning_effort`.
- **Cursor:** `beforeSubmitPrompt` receives the prompt and, when the picker has one, `model_params` effort. Return `additional_context` for the turn directive (the agent injects it; cap is 10,000 characters) and `user_message` for the nudge. `continue` stays true.
- **Amp:** uses the `agent.start` plugin hook to inject per-turn context; effort cannot be changed by a hook.

Verify every hook surface against that host's current docs before writing its adapter.

## Develop

```sh
bun install
bun run classify "the checkout test is flaky in CI, fix it" "rename foo to bar"
bun run typecheck
bun run --filter '@jev-effort/codex' test
bun run --filter '@jev-effort/cursor' test
bun run build        # rebuilds every adapter's dist/ — commit it, installs run the bundle
claude --plugin-dir plugins/claude-code
```

## License

MIT
