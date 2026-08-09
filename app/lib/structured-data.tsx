import { einzugsgebiet, site } from "./site";
import { leistungen } from "./leistungen";

/**
 * Strukturierte Daten (JSON-LD). Google nutzt sie für das lokale Suchergebnis
 * und die Brotkrumen-Anzeige. Ein einzelnes `<script>` pro Seite genügt.
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Der Inhalt ist statisch und stammt aus dem Quellcode, nicht aus Nutzereingaben.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BETRIEB_ID = `${site.url}/#betrieb`;

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": BETRIEB_ID,
        name: site.name,
        legalName: site.legalName,
        alternateName: "Maler-Meister Meyer",
        description:
          "Malermeisterbetrieb für dekorative Innen-, Außen- und Bodengestaltung, Altbausanierung und Schimmelbeseitigung in Eichwalde.",
        url: site.url,
        telephone: "+4917653069633",
        email: site.email,
        vatID: site.vatId,
        foundingDate: String(site.foundedYear),
        logo: `${site.url}/mmm_logo.png`,
        image: `${site.url}/mmm_logo.png`,
        priceRange: "$$",
        currenciesAccepted: "EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.street,
          postalCode: site.postalCode,
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: "DE",
        },
        founder: { "@type": "Person", name: "Wolfgang Meyer" },
        employee: [
          { "@type": "Person", name: "Lars Meyer", jobTitle: site.jobTitle },
          { "@type": "Person", name: "Henry Meyer", jobTitle: site.jobTitle },
        ],
        areaServed: einzugsgebiet.map((ort) => ({ "@type": "City", name: ort })),
        knowsLanguage: "de",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: leistungen.map((leistung) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: leistung.title,
              description: leistung.teaser,
              url: `${site.url}/leistungen#${leistung.slug}`,
            },
          })),
        },
      }}
    />
  );
}

export type Krume = { name: string; href: string };

/** Brotkrumen für Unterseiten – erscheint als Pfad im Suchergebnis. */
export function BreadcrumbJsonLd({ items }: { items: Krume[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Startseite", href: "/" }, ...items].map(
          (item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: new URL(item.href, site.url).toString(),
          })
        ),
      }}
    />
  );
}

/** Bildergalerie – hilft Google, die Referenzbilder korrekt zuzuordnen. */
export function ImageGalleryJsonLd({
  name,
  description,
  url,
  images,
}: {
  name: string;
  description: string;
  url: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name,
        description,
        url: new URL(url, site.url).toString(),
        isPartOf: { "@id": BETRIEB_ID },
        image: images.map((bild) => ({
          "@type": "ImageObject",
          contentUrl: new URL(bild.src, site.url).toString(),
          caption: bild.alt,
        })),
      }}
    />
  );
}
