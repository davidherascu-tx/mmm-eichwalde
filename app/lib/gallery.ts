import { site } from "./site";
import sizes from "./image-sizes.json";

/**
 * Die Pixelmaße aller Bilder stehen in `image-sizes.json` und werden vom Skript
 * `scripts/image-sizes.mjs` erzeugt. Nach dem Hinzufügen neuer Bilder einmal
 * `npm run images` ausführen – dann stimmen die Seitenverhältnisse wieder.
 */
const bildmasse: Record<string, number[]> = sizes;

function masse(src: string) {
  const eintrag = bildmasse[src];
  if (eintrag?.length !== 2) {
    throw new Error(
      `Keine Bildmaße für "${src}". Bitte "npm run images" ausführen.`
    );
  }
  return { width: eintrag[0], height: eintrag[1] };
}

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Filterschlüssel – wird nie angezeigt. */
  category?: string;
  /** Zusatzzeile unter der Bildunterschrift, z. B. Anbieter und Jahr. */
  detail?: string;
};

export type Category = {
  slug: string;
  label: string;
  /** Anzahl der Dateien in public/images/referenzen/<slug>/ */
  anzahl: number;
  /** Nummer des Bildes, das als Albumdeckel dient. Standard: 1. */
  cover?: number;
  /** Kurzbeschreibung auf der Albumübersicht. */
  text: string;
};

/**
 * Referenzkategorien. Neue Bilder als `<slug>-<n>.webp` im jeweiligen Ordner
 * ablegen und `anzahl` erhöhen. Die Reihenfolge hier ist egal – die Liste wird
 * unten alphabetisch sortiert.
 */
const kategorien: Category[] = [
  {
    slug: "farbgestaltung",
    label: "Farbgestaltung",
    anzahl: 24,
    cover: 3,
    text: "Wandfarben und Farbkonzepte für Wohn- und Geschäftsräume.",
  },
  {
    slug: "tapezierarbeiten",
    label: "Tapezierarbeiten",
    anzahl: 14,
    cover: 2,
    text: "Von der Raufaser bis zur hochwertigen Vliesfaser mit Dekorleisten.",
  },
  {
    slug: "spachteltechniken",
    label: "Spachteltechniken",
    anzahl: 11,
    cover: 4,
    text: "Glatte und strukturierte Oberflächen in vielen Variationen.",
  },
  {
    slug: "stuckarbeiten",
    label: "Stuckarbeiten",
    anzahl: 8,
    text: "Profile, Rosetten und Zierleisten – neu gesetzt oder saniert.",
  },
  {
    slug: "beschriftungen",
    label: "Beschriftungen / Schablonenarbeiten",
    anzahl: 7,
    text: "Schriftzüge, Logos und Schablonenmotive direkt auf der Wand.",
  },
  {
    slug: "lasurtechniken",
    label: "Lasurtechniken",
    anzahl: 6,
    cover: 2,
    text: "Weiche Übergänge durch übereinandergelegte Farbschichten.",
  },
  {
    slug: "akustik-spritzputz",
    label: "Akustik-Spritzputz",
    anzahl: 5,
    text: "Schallschluckende Deckenbeschichtung für ruhigere Räume.",
  },
  {
    slug: "spritzarbeiten",
    label: "Spritzarbeiten",
    anzahl: 5,
    text: "Nebelarme Spritzverfahren für gleichmäßige Oberflächen.",
  },
  {
    slug: "aussenarbeiten",
    label: "Außenarbeiten",
    anzahl: 4,
    text: "Fassaden, Zäune und Tore – gestaltet und dauerhaft geschützt.",
  },
  {
    slug: "fussbodenbeschichtungen",
    label: "Fußbodenbeschichtungen",
    anzahl: 3,
    text: "Belastbare Beschichtungen für Keller, Garage und Werkstatt.",
  },
];

/**
 * Alphabetisch nach deutschem Alphabet: `localeCompare` mit "de" behandelt
 * Umlaute wie ihre Grundbuchstaben und ß wie ss – "Außenarbeiten" landet so
 * zwischen "Akustik-Spritzputz" und "Beschriftungen".
 */
export const referenzKategorien: Category[] = [...kategorien].sort((a, b) =>
  a.label.localeCompare(b.label, "de")
);

const referenzPfad = (slug: string, nummer: number) =>
  `/images/referenzen/${slug}/${slug}-${nummer}.webp`;

/** Alle Bilder einer Kategorie – ohne Bildunterschriften. */
export function bilderDerKategorie(slug: string): GalleryImage[] {
  const kategorie = referenzKategorien.find((eintrag) => eintrag.slug === slug);
  if (!kategorie) return [];

  return Array.from({ length: kategorie.anzahl }, (_, index) => {
    const src = referenzPfad(slug, index + 1);
    return {
      src,
      ...masse(src),
      alt: `${kategorie.label} – ausgeführte Arbeit ${index + 1} von ${site.name}`,
      caption: `${kategorie.label} ${index + 1}`,
      category: slug,
    };
  });
}

/** Albumdeckel je Kategorie für die Referenzübersicht. */
export const albumDeckel = referenzKategorien.map((kategorie) => {
  const src = referenzPfad(kategorie.slug, kategorie.cover ?? 1);
  return {
    ...kategorie,
    bild: { src, ...masse(src), alt: `${kategorie.label} – Arbeiten von ${site.name}` },
  };
});

export const referenzen: GalleryImage[] = referenzKategorien.flatMap((kategorie) =>
  bilderDerKategorie(kategorie.slug)
);

/** Fortbildungen und Zertifikate, in der Reihenfolge der Dateien 1–9. */
const zertifikate: { titel: string; detail: string }[] = [
  { titel: "Designböden – ein feiner Auftritt", detail: "Brillux KompaktKurs · Henry Meyer · 2013" },
  { titel: "Spachtelmassen – wenn's glattgehen soll", detail: "Brillux KompaktKurs · Henry Meyer · 2013" },
  { titel: "Steinimitation", detail: "Handwerkskammer Berlin · Lars Meyer · 2010" },
  { titel: "Trompe-l'œil", detail: "Handwerkskammer Berlin · Lars Meyer · 2010" },
  { titel: "5. Techniksymposium", detail: "Farbtrends, VOC-Verordnung, Baurecht · Lars Meyer · 2008" },
  { titel: "Schimmelsanierung mit System", detail: "Fakolith Farben · Lars Meyer · 2009" },
  { titel: "StoTechnik Forum – Schimmelpilzschäden", detail: "Sto AG · Henry Meyer · 2008" },
  { titel: "FlexSandStein – Verarbeitung und Direktveredelung", detail: "Flexstone · Lars Meyer · 2009 · mit Auszeichnung" },
  { titel: "StoTechnik Forum – Schimmelpilzschäden", detail: "Sto AG · Lars Meyer · 2008" },
];

export const qualifikationen: GalleryImage[] = zertifikate.map((zertifikat, index) => {
  const src = `/images/qualifikationen/zertifikat-${index + 1}.webp`;
  return {
    src,
    ...masse(src),
    alt: `Zertifikat: ${zertifikat.titel} – ${zertifikat.detail}`,
    caption: zertifikat.titel,
    detail: zertifikat.detail,
  };
});

/** Die drei Meisterbriefe – gehören zur Firmengeschichte. */
export const meisterbriefe: GalleryImage[] = [
  {
    src: "/images/unternehmen/meisterbrief-wolfgang.webp",
    ...masse("/images/unternehmen/meisterbrief-wolfgang.webp"),
    alt: "Meisterbrief von Wolfgang Meyer, Malerhandwerk, 1977",
    caption: "Wolfgang Meyer",
    detail: "Meister des Handwerks · 1977",
  },
  {
    src: "/images/unternehmen/meisterbrief-henry.webp",
    ...masse("/images/unternehmen/meisterbrief-henry.webp"),
    alt: "Meisterbrief von Henry Meyer im Maler- und Lackiererhandwerk",
    caption: "Henry Meyer",
    detail: "Meisterprüfung · 1988",
  },
  {
    src: "/images/unternehmen/meisterbrief-lars.webp",
    ...masse("/images/unternehmen/meisterbrief-lars.webp"),
    alt: "Meisterbrief von Lars Meyer, Handwerkskammer Berlin, 2009",
    caption: "Lars Meyer",
    detail: "Handwerkskammer Berlin · 2009",
  },
];

export const sliderBilder = [
  { src: "/images/slider/slider-1.webp", alt: "Kamin mit Spachteltechnik in Altrosa, gestaltet vom Malermeister Meyer" },
  { src: "/images/slider/slider-2.webp", alt: "Innenraumgestaltung durch den Maler-Meister Meyer" },
  { src: "/images/slider/slider-3.webp", alt: "Malerarbeiten in einem Wohnraum" },
  { src: "/images/slider/slider-4.webp", alt: "Maler bei gesicherten Arbeiten auf einem Hausdach" },
  { src: "/images/slider/slider-5.webp", alt: "Fassaden- und Außenarbeiten am Objekt" },
].map((bild) => ({ ...bild, ...masse(bild.src) }));

