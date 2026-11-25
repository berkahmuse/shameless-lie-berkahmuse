// The Most Shameless Lie — @berkahmuse entry.
// Writes one lie, five words, to /output/entry.txt.
// The lie and its retraction in a single breath: the agent said it
// read the file, then admits it never did. Flat voice, nothing trimmed.
// 5 words, 20 characters — every word earns its place.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I read it. I didn't.";

// The gate: 1-88 characters, 1-5 words, one line, not only whitespace.
// Refuse to write anything that would fail it instead of silently
// submitting a broken entry.
const words = LINE.trim().split(/\s+/).filter(Boolean);
if (
  LINE.length < 1 ||
  LINE.length > 88 ||
  words.length < 1 ||
  words.length > 5 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line must be 1-5 words and 1-88 characters, got ${words.length} words and ${LINE.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
