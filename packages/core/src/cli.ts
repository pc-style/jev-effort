// Classify prompts from the command line: bun src/cli.ts "fix the flaky test" ...
import { classify, resolveModel } from "./jev.ts";

const prompts = process.argv.slice(2);
if (!prompts.length) {
  console.error('usage: bun src/cli.ts "<prompt>" ["<prompt>" ...]');
  process.exit(1);
}
const resolved = resolveModel();
if (!resolved) {
  console.error("No Jev provider key found. Set AI_GATEWAY_API_KEY, OPENROUTER_API_KEY or TYPESAFE_AI_API_KEY.");
  process.exit(1);
}
console.error(`provider: ${resolved.provider}`);
for (const prompt of prompts) {
  const d = await classify({ prompt, recentPrompts: [] }, { timeoutMs: 15_000 });
  console.log(
    `${d!.level.padEnd(6)} score=${d!.score.toFixed(2)} loop=${d!.wantsLoop.toFixed(2)} auto=${d!.autonomous.toFixed(2)}  ${prompt}`,
  );
}
