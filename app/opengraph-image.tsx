import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./lib/site";

export const alt = `${site.name} – Malerbetrieb in ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Vorschaubild für WhatsApp, Facebook, LinkedIn und Co.
 * Wird zur Buildzeit einmal gerendert.
 */
export default async function Image() {
  // Freigestellte Variante: die Version auf weißem Grund zeichnet auf der
  // weißen Fläche einen sichtbaren grauen Kasten.
  const logo = await readFile(join(process.cwd(), "public/mmm_logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        {/* Farbstreifen des Logos, wie auf der Website */}
        <div style={{ display: "flex", height: 14 }}>
          <div style={{ flex: 1, background: "#1860b4" }} />
          <div style={{ flex: 1, background: "#e41818" }} />
          <div style={{ flex: 1, background: "#fccc24" }} />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
          }}
        >
          {/* Die Grafik füllt nur 47 % der Dateihöhe – daher die negativen
              Ränder, sonst reißt der transparente Rand das Layout auseinander. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse kennt kein next/image */}
          <img
            src={logoSrc}
            alt=""
            width={660}
            height={440}
            style={{ marginTop: -96, marginBottom: -104 }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 46,
              fontWeight: 700,
              color: "#0d2c53",
            }}
          >
            Ihr Partner für individuelle Wohnraumgestaltung
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 29,
              color: "#45505f",
              marginTop: 14,
            }}
          >
            Meisterbetrieb seit {site.foundedYear} · {site.postalCode} {site.city}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#1860b4",
            color: "#ffffff",
            padding: "24px 72px",
          }}
        >
          <span style={{ fontSize: 36, fontWeight: 700, whiteSpace: "nowrap" }}>
            {site.phone}
          </span>
          <span style={{ color: "#fccc24", fontSize: 36, padding: "0 18px" }}>|</span>
          <span style={{ fontSize: 26, whiteSpace: "nowrap" }}>
            Anstrich · Tapeten · Kreativtechniken
          </span>
        </div>
      </div>
    ),
    size
  );
}
