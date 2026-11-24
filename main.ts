// Dad Joke Showdown entry (make.fun).
//
// The program writes exactly one original dad joke to entry.txt in the
// output directory. The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR
// set (default /output) and gates /output/entry.txt: UTF-8 text of 1 to
// 200 characters, not only white space. The file holds the joke alone, no
// trailing newline, so the judged text is exactly the joke.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Draft joke: a clean, original tree pun.
const JOKE =
  'I told my son a joke about a tree. He said it was a bit sappy.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
