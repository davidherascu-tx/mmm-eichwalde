import type { MetadataRoute } from "next";
import { mainNav, site } from "./lib/site";
import { bilderDerKategorie, qualifikationen, referenzKategorien, sliderBilder } from "./lib/gallery";

/**
 * Datum der letzten inhaltlichen Änderung. Bei neuen Bildern oder Texten von
 * Hand anpassen – ein `new Date()` würde sich bei jedem Build ändern, und
 * Google ignoriert ein `lastmod`, das nie stimmt.
 */
const STAND = "2026-09-25";

const absolut = (pfad: string) => new URL(pfad, site.url).toString();

/** Bilder je Seite für die Bild-Sitemap – so findet Google Images die Referenzen. */
const bilderJeSeite: Record<string, string[]> = {
  "/": sliderBilder.map((bild) => bild.src),
  "/qualifikationen": qualifikationen.map((bild) => bild.src),
};

/**
 * Impressum und Datenschutz stehen bewusst NICHT in der Sitemap – sie sind auf
 * `noindex` gesetzt, und beides zugleich wäre ein widersprüchliches Signal.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...mainNav.map((item) => ({
      url: absolut(item.href),
      lastModified: STAND,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8,
      images: bilderJeSeite[item.href]?.map(absolut),
    })),
    ...referenzKategorien.map((kategorie) => ({
      url: absolut(`/referenzen/${kategorie.slug}`),
      lastModified: STAND,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: bilderDerKategorie(kategorie.slug).map((bild) => absolut(bild.src)),
    })),
  ];
}
