// The Funniest AI Excuse
// make.fun bounty: u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes one excuse, exactly one line, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse is a single fixed string: no input, no randomness, no
// templating, so every run produces the same bytes.
const EXCUSE =
  "The task failed because I outsourced it to a smaller model, who outsourced it to a shell script, who has now filed for emotional leave.";

// The gate allows 1 to 200 characters; refuse to emit an over-long line.
if (EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
