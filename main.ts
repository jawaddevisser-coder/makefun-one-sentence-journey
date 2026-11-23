import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One complete journey story in exactly one sentence.
const SENTENCE =
  "Mara left Lisbon at dawn with her grandfather's brass compass and a ticket she couldn't read, rode three trains that smelled of diesel and boiled potatoes across borders she couldn't name, and when the conductor called the last stop she realized the compass had been pointing home all along.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
