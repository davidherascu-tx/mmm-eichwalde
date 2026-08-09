import type { MetadataRoute } from "next";
import { mainNav, site } from "./lib/site";
import { referenzKategorien } from "./lib/gallery";

/**
 * Impressum und Datenschutz stehen bewusst NICHT in der Sitemap – sie sind auf
 * `noindex` gesetzt, und beides zugleich wäre ein widersprüchliches Signal.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...mainNav.map((item) => ({
      url: new URL(item.href, site.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8,
    })),
    ...referenzKategorien.map((kategorie) => ({
      url: new URL(`/referenzen/${kategorie.slug}`, site.url).toString(),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
