import type { Metadata } from "next";

/**
 * Baut die Metadaten einer Unterseite.
 *
 * Wichtig: Sobald eine Seite einen eigenen `openGraph`-Block setzt, ersetzt
 * dieser den geerbten vollständig – auch das Bild aus `app/opengraph-image.tsx`.
 * Deshalb wird `images` hier immer mitgegeben, sonst zeigen geteilte Links auf
 * Unterseiten kein Vorschaubild.
 */
export function seitenMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: ["/opengraph-image"],
    },
    ...(noindex
      ? // Rechtstexte gehören nicht in den Index, Links sollen aber zählen.
        { robots: { index: false, follow: true } }
      : {}),
  };
}
