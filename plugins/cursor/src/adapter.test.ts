import { expect, test } from "bun:test";
import { handleHook } from "./adapter.ts";

const input = {
  hook_event_name: "beforeSubmitPrompt",
  conversation_id: "conv-1",
  prompt: "Fix the parser",
  model_params: [{ id: "thinking", value: "true" }, { id: "effort", value: "low" }],
};

const decision = { level: "high" as const, score: 2, wantsLoop: 0, autonomous: 0, provider: "typesafe" as const };

test("injects the turn directive and reads picker effort", async () => {
  const output = await handleHook(input, {}, async (prompt, opts) => {
    expect(prompt).toBe(input.prompt);
    expect(opts.dataDir).toMatch(/\/\.cursor\/jev-effort$/);
    expect(opts.sessionId).toBe("conv-1");
    expect(opts.currentEffort).toBe("low");
    expect(opts.effortCommand?.("high")).toBe("set the model effort to high");
    return { decision, context: "Reproduce before changing code." };
  });
  expect(output).toEqual({ continue: true, additional_context: "Reproduce before changing code." });
});

test("forwards a nudge and maps Extra High", async () => {
  const output = await handleHook(
    { ...input, model_params: [{ id: "effort", value: "Extra High" }] },
    {},
    async (_, opts) => {
      expect(opts.currentEffort).toBe("xhigh");
      return { decision, context: "Keep it light.", nudge: "jev-effort: looks like low-effort work" };
    },
  );
  expect(output).toEqual({
    continue: true,
    additional_context: "Keep it light.",
    user_message: "jev-effort: looks like low-effort work",
  });
});

test("uses session_id when conversation_id is absent", async () => {
  let called = false;
  await handleHook({ hook_event_name: "beforeSubmitPrompt", session_id: "sess-9", prompt: "hi" }, {}, async (_, opts) => {
    called = true;
    expect(opts.sessionId).toBe("sess-9");
    expect(opts.currentEffort).toBeUndefined();
    return undefined;
  });
  expect(called).toBe(true);
});

test.each([
  null,
  [],
  {},
  { ...input, prompt: 42 },
  { ...input, hook_event_name: "stop" },
])("ignores invalid or unrelated input %j", async (value) => {
  let called = false;
  expect(await handleHook(value, {}, async () => {
    called = true;
    return undefined;
  })).toBeUndefined();
  expect(called).toBe(false);
});

test("fails open on classifier errors", async () => {
  expect(await handleHook(input, {}, async () => {
    throw new Error("unavailable");
  })).toBeUndefined();
});

test("real core is silent when disabled and for slash commands", async () => {
  expect(await handleHook(input, { JEV_EFFORT_DISABLE: "1" })).toBeUndefined();
  expect(await handleHook({ ...input, prompt: "/model" }, {})).toBeUndefined();
});
