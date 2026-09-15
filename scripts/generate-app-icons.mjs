/**
 * Derives the PWA icon set from app/icon.png.
 *
 * The source is transparent, which Android renders as a hole once it applies its own
 * shape mask, so the maskable variant gets the paper ground and is inset to the 80%
 * safe zone. Android also asks for a 192px entry alongside the 512.
 *
 * Run from the repo root: node scripts/generate-app-icons.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "app", "icon.png");
const OUT_DIR = path.join(ROOT, "public", "icons");
const PAPER = "#f6f3ec";

async function plain(size) {
  const out = path.join(OUT_DIR, `icon-${size}.png`);
  await sharp(SOURCE).resize(size, size, { fit: "contain", background: PAPER }).flatten({ background: PAPER }).png().toFile(out);
  console.log(`icon-${size}.png`);
}

async function maskable(size) {
  const safe = Math.round(size * 0.62);
  const pad = Math.round((size - safe) / 2);
  const mark = await sharp(SOURCE).resize(safe, safe, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const out = path.join(OUT_DIR, `icon-maskable-${size}.png`);

  await sharp({ create: { width: size, height: size, channels: 3, background: PAPER } })
    .composite([{ input: mark, top: pad, left: pad }])
    .png()
    .toFile(out);
  console.log(`icon-maskable-${size}.png`);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  await plain(192);
  await plain(512);
  await maskable(512);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
