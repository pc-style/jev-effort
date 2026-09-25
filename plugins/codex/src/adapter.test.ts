import { expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { handleHook } from "./adapter.ts";

const input = { hook_event_name: "UserPromptSubmit", session_id: "thread-1", prompt: "Fix the parser" };

test("injects context using the plugin data directory and thread id", async () => {
  const output = await handleHook(input, { PLUGIN_DATA: "/plugin data", CODEX_HOME: "/codex" }, async (prompt, opts) => {
    expect(prompt).toBe(input.prompt);
    expect(opts.dataDir).toBe("/plugin data");
    expect(opts.sessionId).toBe("thread-1");
    expect(opts.currentEffort).toBeUndefined();
    expect(opts.effortCommand).toBeUndefined();
    return {
      decision: { level: "xhigh", score: 3, wantsLoop: 0, autonomous: 0, provider: "typesafe" },
      context: "Check parser edge cases.",
    };
  });
  expect(output).toEqual({ hookSpecificOutput: {
    hookEventName: "UserPromptSubmit", additionalContext: "Check parser edge cases.",
  } });
});

test.each([
  [{ CLAUDE_PLUGIN_DATA: "/compat" }, "/compat"],
  [{ CODEX_HOME: "/custom" }, "/custom/jev-effort"],
] as const)("resolves fallback data directory %j", async (env, expected) => {
  await handleHook(input, env, async (_, opts) => {
    expect(opts.dataDir).toBe(expected);
    return undefined;
  });
});

test.each([null, [], {}, { ...input, prompt: 42 }, { ...input, session_id: "" },
  { ...input, hook_event_name: "Stop" }])("ignores invalid or unrelated input %j", async (value) => {
  let called = false;
  expect(await handleHook(value, {}, async () => { called = true; return undefined; })).toBeUndefined();
  expect(called).toBe(false);
});

test("fails open on classifier or filesystem errors", async () => {
  expect(await handleHook(input, {}, async () => { throw new Error("unavailable"); })).toBeUndefined();
});

test("real core is silent without credentials, when disabled, and for slash commands", async () => {
  const dir = await mkdtemp(join(tmpdir(), "jev-codex-test-"));
  try {
    expect(await handleHook(input, { PLUGIN_DATA: dir })).toBeUndefined();
    expect(await handleHook(input, { PLUGIN_DATA: dir, JEV_EFFORT_DISABLE: "1" })).toBeUndefined();
    expect(await handleHook({ ...input, prompt: "/model" }, { PLUGIN_DATA: dir })).toBeUndefined();
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
