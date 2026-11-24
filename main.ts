// Dad Joke Showdown entry (make.fun).
//
// The program writes exactly one original dad joke to entry.txt in the
// output directory. The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR
// set (default /output) and gates /output/entry.txt: UTF-8 text of 1 to
// 200 characters, not only white space. The file holds the joke alone, no
// trailing newline, so the judged text is exactly the joke.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke: a straight-faced dialogue with the wife, one clean pun
// landing at the very end. "Lunar-tic" reads as "lunatic" aloud, which
// is exactly the groan a dad joke wants, and the moon setup makes the
// turn land on the first read with no explaining.
const JOKE =
  'I told my wife I was writing a book about the moon. She said it was a lunar-tic idea.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate requires 1 to 200 characters and not only white space.
// Fail loudly here rather than ever writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  process.stderr.write(`dad joke: joke is ${JOKE.length} characters, outside the 1-200 gate\n`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
