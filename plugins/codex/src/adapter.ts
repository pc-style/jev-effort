import { homedir } from "node:os";
import { join } from "node:path";
import { advise } from "@jev-effort/core";

// Codex's documented hook input has no current reasoning-effort field.
// Only context is returned: hooks cannot change model_reasoning_effort.
export async function handleHook(
  input: unknown,
  env: NodeJS.ProcessEnv = process.env,
  adviseTurn: typeof advise = advise,
) {
  if (!input || typeof input !== "object" ||
    !("hook_event_name" in input) || input.hook_event_name !== "UserPromptSubmit" ||
    !("session_id" in input) || typeof input.session_id !== "string" || !input.session_id.trim() ||
    !("prompt" in input) || typeof input.prompt !== "string") return;

  try {
    const advice = await adviseTurn(input.prompt, {
      dataDir: env.PLUGIN_DATA ?? env.CLAUDE_PLUGIN_DATA ??
        join(env.CODEX_HOME ?? join(homedir(), ".codex"), "jev-effort"),
      sessionId: input.session_id,
      env,
    });
    if (!advice) return;
    return {
      hookSpecificOutput: {
        hookEventName: "UserPromptSubmit",
        additionalContext: advice.context,
      },
    };
  } catch {
    // Classification and filesystem failures must never block a prompt.
    return;
  }
}
