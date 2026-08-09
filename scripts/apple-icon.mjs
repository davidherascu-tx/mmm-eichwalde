// Rendert app/icon.svg zu app/apple-icon.png (180x180). Aufruf: npm run icon
//
// Warum als Datei statt per ImageResponse: next/og rastert ueber sharp, und
// Next blockiert im Bildoptimierer prozessweit den SVG-Loader von libvips
// (image-optimizer.js: sharp.block({ operation: ['VipsForeignLoad'] })).
// Sobald eine Seite mit <Image> geladen wurde, scheitert deshalb jede
// ImageResponse mit "Input buffer contains unsupported image format".
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const quelle = path.join("app", "icon.svg");
const ziel = path.join("app", "apple-icon.png");

// iOS maskiert das Icon selbst – die abgerundeten Ecken aus icon.svg wuerden
// doppelt gerundet aussehen, deshalb hier eine quadratische weisse Flaeche.
const svg = fs.readFileSync(quelle, "utf8").replace(/\srx="10"/, "");

const png = await sharp(Buffer.from(svg))
  .resize(180, 180)
  .flatten({ background: "#ffffff" })
  .png()
  .toBuffer();

fs.writeFileSync(ziel, png);
console.log(`${quelle} → ${ziel} (${png.length} Bytes, 180x180)`);
