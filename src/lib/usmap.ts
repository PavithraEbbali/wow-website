/**
 * A 46 x 27 dot-matrix of the contiguous United States.
 *
 * Each character is one dot: " " is water/outside, "." is land we don't serve,
 * and a letter marks one of WOW!'s eight states. The grid is plotted on a plain
 * equirectangular projection — col = (lon + 125) / 58 * 45, row = (49 - lat) /
 * 24 * 26 — so the silhouette and every state sit where they actually belong.
 *
 * Deliberately coarse: a dot matrix reads as an illustration, which is honest.
 * Coverage is address-level, so a precise border map would overclaim.
 */
export const US_MAP = [
  "  ......................                      ",
  "  .......................                     ",
  "  ........................ MMMMM           .. ",
  "  .........................MMMMMM         ... ",
  "  ..........................  MMM        .... ",
  "  ..........................  MMM      ...... ",
  "  ..........................  MMM   ........  ",
  "  ........................II  MMM    ......   ",
  "  ........................III..OOO.........   ",
  "  ........................III..OOO........    ",
  "  ........................III..OOO.......     ",
  "  ........................III..OOO......      ",
  "  ........................III...........      ",
  "  .....................................       ",
  "  .........................TTTTTTTT....       ",
  "  .........................TTTTTTTT...        ",
  "   .........................AAAGGGSSS         ",
  "     .......................AAAGGGSSS         ",
  "      ......................AAAGGG..          ",
  "        ....................AAAGGG.           ",
  "              ...............FFFFFF           ",
  "               ..............FFFFFF           ",
  "                .......         FFFF          ",
  "                 ....            FFF          ",
  "                  ..             FFF          ",
  "                                 FF           ",
  "                                 FF           ",
] as const;

/** Map letter → state code. */
export const MAP_KEY: Record<string, string> = {
  M: "MI",
  I: "IL",
  O: "OH",
  T: "TN",
  A: "AL",
  G: "GA",
  S: "SC",
  F: "FL",
};

export const CELL = 11; // svg units per dot
export const DOT = 6.4; // dot diameter
/** The wave radiates from roughly the middle of the served region. */
const ORIGIN = { col: 32, row: 10 };

export type DotGroup = { k: string; ring: number; d: string };

/**
 * Collapse the grid into one path per (state, wave-ring) pair. Each dot becomes
 * a zero-length `h0` segment drawn with a round linecap, which is far smaller
 * than a <circle> per dot — ~750 dots ship as a few KB — while still letting
 * every ring carry its own animation delay.
 */
export function buildDotGroups(): { groups: DotGroup[]; width: number; height: number; maxRing: number } {
  const bucket = new Map<string, string[]>();
  let maxRing = 0;

  US_MAP.forEach((line, row) => {
    for (let col = 0; col < line.length; col++) {
      const ch = line[col];
      if (ch === " ") continue;
      const ring = Math.round(Math.hypot(col - ORIGIN.col, row - ORIGIN.row) / 2);
      if (ring > maxRing) maxRing = ring;
      const key = `${ch}|${ring}`;
      const x = col * CELL + CELL / 2;
      const y = row * CELL + CELL / 2;
      const arr = bucket.get(key);
      if (arr) arr.push(`M${x} ${y}h0`);
      else bucket.set(key, [`M${x} ${y}h0`]);
    }
  });

  const groups: DotGroup[] = [];
  bucket.forEach((segs, key) => {
    const [k, ring] = key.split("|");
    groups.push({ k, ring: Number(ring), d: segs.join("") });
  });

  return {
    groups,
    width: US_MAP[0].length * CELL,
    height: US_MAP.length * CELL,
    maxRing,
  };
}
