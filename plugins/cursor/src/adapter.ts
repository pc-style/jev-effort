import { homedir } from "node:os";
import { join } from "node:path";
import { advise, isLevel, type Level } from "@jev-effort/core";

// Cursor's model picker reports effort as model_params[{id:"effort"}].
// beforeSubmitPrompt can inject additional_context; it cannot change the picker.
const EFFORT_ALIASES: Record<string, Level> = {
  "extra high": "xhigh",
  "extra-high": "xhigh",
  extra_high: "xhigh",
  extrahigh: "xhigh",
};

export async function handleHook(
  input: unknown,
  env: NodeJS.ProcessEnv = process.env,
  adviseTurn: typeof advise = advise,
) {
  if (!input || typeof input !== "object") return;
  const event = "hook_event_name" in input ? input.hook_event_name : undefined;
  if (event && event !== "beforeSubmitPrompt") return;
  if (!("prompt" in input) || typeof input.prompt !== "string") return;

  const sessionId = stringField(input, "conversation_id") || stringField(input, "session_id") || "cursor";

  try {
    const advice = await adviseTurn(input.prompt, {
      dataDir: join(homedir(), ".cursor", "jev-effort"),
      sessionId,
      currentEffort: effortFrom(input),
      effortCommand: (level) => `set the model effort to ${level}`,
      env,
    });
    if (!advice) return;
    return {
      continue: true,
      additional_context: advice.context,
      ...(advice.nudge ? { user_message: advice.nudge } : {}),
    };
  } catch {
    // Classification and filesystem failures must never block a prompt.
    return;
  }
}

function stringField(input: object, key: string) {
  const value = (input as Record<string, unknown>)[key];
  return typeof value === "string" && value.trim() ? value : undefined;
}

function effortFrom(input: object): Level | undefined {
  if (!("model_params" in input) || !Array.isArray(input.model_params)) return;
  const raw = input.model_params.find(
    (param): param is { id: string; value: string } =>
      !!param && typeof param === "object" && "id" in param && param.id === "effort" &&
      "value" in param && typeof param.value === "string",
  )?.value.trim().toLowerCase();
  if (!raw) return;
  if (isLevel(raw)) return raw;
  return EFFORT_ALIASES[raw];
}
