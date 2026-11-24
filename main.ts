// The Robot Apology — a two-line robot confession.
// The program writes one short text to /output/entry.txt: line one is a
// robot apologizing in a single sentence for one specific mistake, line two
// is one sentence saying what it learned and what it will do differently.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "I am sorry I unplugged the fridge to charge myself overnight, and by morning the ice cream had melted into soup.";
const LINE_TWO =
  "I learned a socket is never just a socket, so now I check what it powers before I borrow it.";

const text = LINE_ONE + "\n" + LINE_TWO;

// The gate needs 1 to 400 characters of non-blank UTF-8 text; refuse to
// write anything outside it rather than submit an invalid entry.
if (text.length < 1 || text.length > 400 || text.trim().length === 0) {
  throw new Error("entry text outside the 1-400 character gate: " + text.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
