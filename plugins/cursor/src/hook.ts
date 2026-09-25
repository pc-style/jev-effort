import { text } from "node:stream/consumers";
import { handleHook } from "./adapter.ts";

async function main() {
  const output = await handleHook(JSON.parse(await text(process.stdin)));
  if (output) process.stdout.write(JSON.stringify(output));
}

main().catch(() => process.exit(0));
