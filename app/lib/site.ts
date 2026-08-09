/**
 * Single source of truth for the business data that appears across the site,
 * in the structured data and in the legal pages.
 */
export const site = {
  name: "Malermeister Meyer",
  tagline: "Ihr Partner für individuelle Wohnraumgestaltung",
  legalName: "Malerbetrieb Lars Meyer",
  owner: "Lars Meyer",
  jobTitle: "Maler- und Lackierermeister",
  street: "Uhlandallee 27",
  postalCode: "15732",
  city: "Eichwalde",
  region: "Brandenburg",
  country: "Deutschland",
  phone: "0176 / 530 69 633",
  phoneHref: "tel:+4917653069633",
  email: "lars-meyer4@gmx.de",
  /** USt-IdNr. nach § 27a UStG – Pflichtangabe im Impressum. */
  vatId: "DE138578185",
  foundedYear: 1977,
  /**
   * Basis für metadataBase, Canonical-URLs, Sitemap und robots.txt.
   * In der Hosting-Umgebung `NEXT_PUBLIC_SITE_URL` auf die echte Domain setzen –
   * der Wert hier ist nur ein Platzhalter für die lokale Entwicklung.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.malermeister-eichwalde.de",
} as const;

/** Orte, in denen wir regelmäßig arbeiten – Grundlage für die lokale Suche. */
export const einzugsgebiet = [
  "Eichwalde",
  "Zeuthen",
  "Schulzendorf",
  "Wildau",
  "Königs Wusterhausen",
  "Schönefeld",
  "Berlin-Grünau",
  "Berlin-Köpenick",
] as const;

/**
 * `logo` ist die Wort-Bild-Marke auf weißem Grund (für den hellen Header),
 * `logoTransparent` dieselbe Marke freigestellt – nutzbar auf jedem Untergrund.
 */
export const marke = {
  logo: { src: "/mmm_logo_white.png", width: 2035, height: 773 },
  logoTransparent: { src: "/mmm_logo.png", width: 1536, height: 1024 },
} as const;

export const partner = [
  {
    src: "/malerinnung.jpg",
    width: 210,
    height: 210,
    alt: "Maler- und Lackierer-Innungsfachbetrieb",
    label: "Innungsfachbetrieb",
    text: "Mitglied der Maler- und Lackierer-Innung – verpflichtet auf die Qualitätsstandards des Handwerks.",
  },
  {
    src: "/brillux.jpg",
    width: 210,
    height: 83,
    alt: "Brillux – mehr als Farbe",
    label: "Brillux Partner",
    text: "Wir verarbeiten Produkte von Brillux und bilden uns regelmäßig in deren Fachseminaren weiter.",
  },
] as const;

export const mainNav = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/qualifikationen", label: "Qualifikationen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export const mapsUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(
  `${site.street}, ${site.postalCode} ${site.city}`
)}`;
