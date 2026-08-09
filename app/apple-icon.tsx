import { ImageResponse } from "next/og";
import { site } from "./lib/site";

export const alt = site.name;
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Icon für den iOS-Homescreen. iOS zeigt keine SVG-Favicons an, deshalb wird
 * hier aus demselben Motiv wie `icon.svg` ein PNG erzeugt.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <g fill="none" strokeLinecap="round">
            <path d="M6 34C14 16 32 10 44 16" stroke="#1860b4" strokeWidth="5" />
            <path d="M9 43C17 27 33 21 45 26" stroke="#e41818" strokeWidth="5" />
            <path d="M12 52C20 38 34 32 46 36" stroke="#fccc24" strokeWidth="5" />
          </g>
          <ellipse
            cx="41"
            cy="40"
            rx="19"
            ry="13"
            fill="#ffffff"
            stroke="#1860b4"
            strokeWidth="2.5"
          />
          <path
            d="M30 46V34l5.5 8 5.5-8 5.5 8 5.5-8v12"
            fill="none"
            stroke="#1860b4"
            strokeWidth="2.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
