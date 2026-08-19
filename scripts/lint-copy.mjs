// Build-time copy lint (§5.3). Greps content constants, components, metadata,
// legal pages, alt text and JSON-LD for the §5.1 banned-phrase families and
// fails the build on a hit. Unicode-variant hyphens are normalized first.
// An allowlist of spec-mandated exact strings is honored (scripts/lint-allowlist.txt).
//
// Run: node scripts/lint-copy.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");

// Banned substrings (case-insensitive). Curated from §5.1.
const BANNED = [
  // store / local / anti-call-center family
  "no call-center maze", "answered by real people", "a real person", "real person",
  "talk to a human", "talk to a real specialist", "talk to a specialist", "face to face",
  "in person", "in-store", "walk in", "walk out", "across the counter", "storefront",
  "brick and mortar", "visit us", "stop by", "come see us", "our office", "showroom",
  "local branch", "local specialist", "local team", "local crew", "local technician",
  "local experts", "local touch", "local advantage", "people from your neighborhood",
  "neighborly", "hometown", "same-day setup", "no offshore script", "no phone tree",
  "no ticket number", "who picks up the phone", "dedicated local team",
  "no pressure, no runaround", "no upsell",
  // identity / credential family
  "licensed", "family-owned", "veteran-owned", "small business", "us-based",
  // fabrication family
  "hidden fees", "$0 hidden fees", "no hidden fees", "no surprise fees",
  "verified today", "available nationwide", "our network", "our backbone",
  "our technicians", "we'll pay off your contract", "we pay your etf",
  // capability lies
  "order online", "checkout",
];

// Regex-based checks that need word context.
const REGEX = [
  { re: /\b\d[\d,]{2,}\+?\s*(customers|subscribers|neighbors|homes connected)\b/i, name: "fabricated customer/subscriber count" },
  { re: /\bofficial\s+WOW!?/i, name: "'official' near carrier name" },
  { re: /\bWOW!\s+official/i, name: "'official' near carrier name" },
];

const allowlist = readFileSync(join(root, "scripts", "lint-allowlist.txt"), "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

function normalize(s) {
  // Normalize non-ASCII hyphens/dashes to ASCII "-" before matching.
  return s.replace(/[‐‑‒–—−]/g, "-");
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
}

let hits = 0;
for (const file of walk(SRC)) {
  const raw = readFileSync(file, "utf8");
  const lines = raw.split(/\r?\n/);
  lines.forEach((line, i) => {
    const norm = normalize(line);
    const lower = norm.toLowerCase();
    // If the whole line (trimmed) is an allowlisted string, skip it.
    const trimmed = norm.trim();
    const allowed = allowlist.some((a) => trimmed.includes(a));
    if (allowed) return;
    for (const bad of BANNED) {
      if (lower.includes(bad)) {
        console.error(`✗ ${file.replace(root, ".")}:${i + 1}  banned: "${bad}"`);
        console.error(`    ${line.trim()}`);
        hits++;
      }
    }
    for (const { re, name } of REGEX) {
      if (re.test(norm)) {
        console.error(`✗ ${file.replace(root, ".")}:${i + 1}  banned (${name})`);
        console.error(`    ${line.trim()}`);
        hits++;
      }
    }
  });
}

if (hits) {
  console.error(`\nCopy lint FAILED: ${hits} banned-phrase hit(s).`);
  process.exit(1);
} else {
  console.log("✓ Copy lint passed — no banned phrases found.");
}
