/**
 * Builds the 1200x630 social cards.
 *
 * Share sheets (WhatsApp above all, then Facebook and X) crop to 1.91:1. Feeding
 * them the 3:4 editorial photography meant the subject was cut out of every
 * preview, so each card is an attention-cropped frame with a scrim and the mark.
 *
 * Run from the repo root: node scripts/generate-og-images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC, "og");
const MARK = path.join(PUBLIC, "brand", "serenari-mark.png");

const WIDTH = 1200;
const HEIGHT = 630;
const MARK_WIDTH = 150;
const PAD = 52;

/** Home card, then one per therapy — sources mirror lib/services.ts covers. */
const CARDS = [
  { out: "serenari-og.jpg", src: "sobre-nos/05.jpg" },
  { out: "terapias.jpg", src: "services/pedras-quentes/01.jpg" },
  { out: "services/massagem-relaxante.jpg", src: "services/massagem-relaxante/01.jpg" },
  { out: "services/massagem-terapeutica.jpg", src: "services/massagem-terapeutica/01.jpg" },
  { out: "services/drenagem-linfatica-corporal.jpg", src: "services/drenagem-corporal/01.jpg" },
  { out: "services/massagem-pedras-quentes.jpg", src: "services/pedras-quentes/01.jpg" },
  { out: "services/massagem-localizada.jpg", src: "services/massagem-localizada/01.jpg" },
  { out: "services/massagem-desportiva.jpg", src: "services/massagem-desportiva/01.jpg" },
  { out: "services/liberacao-miofascial.jpg", src: "services/liberacao-miofascial/01.jpg" },
  { out: "services/ventosaterapia.jpg", src: "services/ventosa-terapia/01.jpg" },
  { out: "services/shiatsu.jpg", src: "services/shiatsu/01.jpg" },
  { out: "services/reflexologia-podal.jpg", src: "services/reflexologia-podal/01.jpg" },
  { out: "services/esfoliacao-corporal.jpg", src: "esfoliacao-corporal.png" },
  { out: "services/drenagem-linfatica-facial.jpg", src: "services/drenagem-facial/01.jpg" },
  { out: "services/revitalizacao-facial.jpg", src: "services/revitalizacao-facial/03.jpg" },
  { out: "services/limpeza-de-pele-natural.jpg", src: "limpeza-de-pele-natural.png" },
];

/** The lockup ships as a green-on-transparent mask; repaint it in paper. */
async function paperMark() {
  const resized = sharp(MARK).resize({ width: MARK_WIDTH });
  const { width, height } = await resized.toBuffer({ resolveWithObject: true }).then((r) => r.info);
  const alpha = await sharp(MARK).resize({ width: MARK_WIDTH }).ensureAlpha().extractChannel("alpha").toBuffer();

  return sharp({ create: { width, height, channels: 3, background: "#f6f3ec" } })
    .joinChannel(alpha)
    .png()
    .toBuffer();
}

function scrim() {
  return Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <!-- Confined to the bottom third: it exists to seat the mark, not to tint the photo. -->
         <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
           <stop offset="0%" stop-color="#11140f" stop-opacity="0.62"/>
           <stop offset="18%" stop-color="#11140f" stop-opacity="0.30"/>
           <stop offset="38%" stop-color="#11140f" stop-opacity="0.06"/>
           <stop offset="55%" stop-color="#11140f" stop-opacity="0"/>
         </linearGradient>
       </defs>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
     </svg>`
  );
}

async function main() {
  mkdirSync(path.join(OUT_DIR, "services"), { recursive: true });
  const mark = await paperMark();
  const markMeta = await sharp(mark).metadata();
  const overlay = scrim();

  for (const card of CARDS) {
    const outPath = path.join(OUT_DIR, card.out);
    const info = await sharp(path.join(PUBLIC, card.src))
      .resize(WIDTH, HEIGHT, { fit: "cover", position: sharp.strategy.attention })
      .modulate({ saturation: 0.82 })
      .composite([
        { input: overlay, top: 0, left: 0 },
        { input: mark, top: HEIGHT - PAD - (markMeta.height ?? 0), left: PAD },
      ])
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);

    console.log(`${card.out} <- ${card.src} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}kB)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
