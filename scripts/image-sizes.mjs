// Liest die echten Pixelmasse aller Bilder in public/images/ und schreibt sie
// nach app/lib/image-sizes.json, damit next/image korrekte Seitenverhaeltnisse
// bekommt. Aufruf: npm run images
import fs from "node:fs";
import path from "node:path";

function dims(file) {
  const b = fs.readFileSync(file);
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const fmt = b.toString("ascii", 12, 16);
    if (fmt === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    if (fmt === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (fmt === "VP8X") return { w: b.readUIntLE(24, 3) + 1, h: b.readUIntLE(27, 3) + 1 };
  }
  if (b[0] === 0x89 && b.toString("ascii", 1, 4) === "PNG")
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    let o = 2;
    while (o < b.length - 8) {
      if (b[o] !== 0xff) { o++; continue; }
      const m = b[o + 1];
      const len = b.readUInt16BE(o + 2);
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
        return { h: b.readUInt16BE(o + 5), w: b.readUInt16BE(o + 7) };
      o += 2 + len;
    }
  }
  return null;
}

const out = {};
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else {
      const url = "/" + path.relative("public", full).split(path.sep).join("/");
      out[url] = dims(full);
    }
  }
}
walk(path.join("public", "images"));

const failed = Object.entries(out).filter(([, v]) => !v);
if (failed.length) {
  console.error("Masse nicht lesbar:", failed.map(([k]) => k).join(", "));
  process.exit(1);
}

const sorted = Object.keys(out)
  .sort()
  .map((k) => `  ${JSON.stringify(k)}: [${out[k].w}, ${out[k].h}]`)
  .join(",\n");

fs.writeFileSync(
  path.join("app", "lib", "image-sizes.json"),
  `{\n${sorted}\n}\n`
);
console.log(`${Object.keys(out).length} Bilder vermessen → app/lib/image-sizes.json`);
