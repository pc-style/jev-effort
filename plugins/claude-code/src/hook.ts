// Claude Code adapter.
//
// UserPromptSubmit: classify the prompt with Jev and inject the turn directive
// as additionalContext, plus a systemMessage nudge to run /effort when the gap
// to the session's real level is large.
// Stop: UserPromptSubmit input carries no effort level but Stop input does, so
// remember it for the next prompt.
//
// Claude Code has no hook output that sets effort, so the level change itself
// stays with the user.
import { homedir } from "node:os";
import { join } from "node:path";
import { text } from "node:stream/consumers";
import { advise, isLevel, recordEffort, type AdviseOptions } from "@jev-effort/core";

type HookInput = {
  hook_event_name: string;
  session_id: string;
  prompt?: string;
  effort?: { level?: string };
};

async function main() {
  const input = JSON.parse(await text(process.stdin)) as HookInput;
  const opts: AdviseOptions = {
    dataDir: process.env.CLAUDE_PLUGIN_DATA ?? join(homedir(), ".claude", "jev-effort"),
    sessionId: input.session_id,
    effortCommand: (level) => `/effort ${level}`,
  };

  if (input.hook_event_name !== "UserPromptSubmit") {
    const level = input.effort?.level;
    if (isLevel(level)) await recordEffort(level, opts);
    return;
  }

  const advice = await advise(input.prompt ?? "", opts);
  if (!advice) return;
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: { hookEventName: "UserPromptSubmit", additionalContext: advice.context },
      ...(advice.nudge && { systemMessage: advice.nudge }),
    }),
  );
}

main().catch(() => process.exit(0));
