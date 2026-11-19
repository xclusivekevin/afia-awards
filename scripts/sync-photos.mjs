/**
 * Drop nominee photographs into public/img/nominees, then run:
 *     node scripts/sync-photos.mjs
 *
 * It matches each file to a nominee by slug and writes the `photo:` field into
 * lib/nominees.ts. Nobody has to hand-edit 66 entries, and a file that matches
 * nothing is reported rather than silently ignored.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "public/img/nominees");
const SRC = path.join(ROOT, "lib/nominees.ts");

const slug = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
   .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

if (!fs.existsSync(DIR)) { console.error("No such folder:", DIR); process.exit(1); }

const files = fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
const bySlug = new Map(files.map((f) => [slug(path.basename(f, path.extname(f))), f]));

let src = fs.readFileSync(SRC, "utf8");
const names = [...src.matchAll(/\{ name: "([^"]+)"/g)].map((m) => m[1]);

let set = 0, cleared = 0;
const used = new Set();
for (const name of names) {
  const file = bySlug.get(slug(name));
  // Rewrite this nominee's entry: add, replace or drop its photo field.
  const entry = new RegExp(`(\\{ name: "${name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}",[^}]*?)(, photo: "[^"]*")?( \\})`);
  if (file) {
    used.add(file);
    const before = src;
    src = src.replace(entry, (_, head, __, tail) => `${head}, photo: "${file}"${tail}`);
    if (src !== before) set++;
  } else {
    const before = src;
    src = src.replace(entry, (_, head, old, tail) => `${head}${tail}`);
    if (src !== before && before.includes(`photo:`)) cleared++;
  }
}

fs.writeFileSync(SRC, src);
const orphans = files.filter((f) => !used.has(f));
const withPhoto = (src.match(/, photo: "/g) || []).length;
console.log(`${files.length} image file(s) in public/img/nominees`);
console.log(`${withPhoto} of ${names.length} nominees point at a photograph (${set} changed by this run)`);
console.log(`${names.length - withPhoto} still show the placeholder`);
if (orphans.length) {
  console.log(`\n${orphans.length} file(s) matched no nominee. Check the spelling against`);
  console.log(`AFIA_2026_Nominee_Photos_Needed.md:`);
  orphans.forEach((f) => console.log("  " + f));
}
