import { homedir } from "node:os";
import { join } from "node:path";
import type { PluginAPI } from "@ampcode/plugin";
import { advise } from "@jev-effort/core";

export const description = "Classifies each Amp turn with Jev and adds effort-appropriate guidance to the agent's context.";

export default function (amp: PluginAPI) {
  amp.on("agent.start", async (event) => {
    try {
      const advice = await advise(event.message, {
        dataDir: join(homedir(), ".config", "amp", "jev-effort"),
        sessionId: event.thread.id,
      });
      if (advice) return { message: { content: advice.context } };
    } catch {
      // Plugin I/O failures must not prevent the user's turn from starting.
    }
    return {};
  });
}
