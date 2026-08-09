import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../components/container";
import { CtaSection } from "../../components/cta-section";
import { ImageGallery } from "../../components/image-gallery";
import { PageHeader } from "../../components/page-header";
import { bilderDerKategorie, referenzKategorien } from "../../lib/gallery";
import { ImageGalleryJsonLd } from "../../lib/structured-data";
import { seitenMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return referenzKategorien.map((kategorie) => ({ kategorie: kategorie.slug }));
}

// Nur die zehn bekannten Alben existieren – alles andere ist eine 404.
export const dynamicParams = false;

const findeKategorie = (slug: string) =>
  referenzKategorien.find((eintrag) => eintrag.slug === slug);

export async function generateMetadata(
  props: PageProps<"/referenzen/[kategorie]">
): Promise<Metadata> {
  const { kategorie: slug } = await props.params;
  const kategorie = findeKategorie(slug);
  if (!kategorie) return {};

  return seitenMetadata({
    title: `${kategorie.label} – Referenzen`,
    description: `${kategorie.text} ${kategorie.anzahl} Bilder aus dem Malermeisterbetrieb Meyer in Eichwalde.`,
    path: `/referenzen/${kategorie.slug}`,
  });
}

export default async function Album(props: PageProps<"/referenzen/[kategorie]">) {
  const { kategorie: slug } = await props.params;
  const kategorie = findeKategorie(slug);
  if (!kategorie) notFound();

  const bilder = bilderDerKategorie(slug);
  const position = referenzKategorien.findIndex((eintrag) => eintrag.slug === slug);
  const weitere = [
    referenzKategorien[(position + 1) % referenzKategorien.length],
    referenzKategorien[(position + 2) % referenzKategorien.length],
    referenzKategorien[(position + 3) % referenzKategorien.length],
  ];

  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        title={kategorie.label}
        krumen={[
          { name: "Referenzen", href: "/referenzen" },
          { name: kategorie.label, href: `/referenzen/${kategorie.slug}` },
        ]}
        intro={`${kategorie.text} ${kategorie.anzahl} Bilder – klicken Sie ein Bild an, um es groß zu sehen.`}
      >
        <Link
          href="/referenzen"
          className="mt-8 inline-block border-2 border-white/30 px-5 py-2.5 font-bold text-white transition-colors hover:border-white hover:bg-white/10"
        >
          ← Alle Arbeitsbereiche
        </Link>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <ImageGallery images={bilder} showCaption={false} />
        </Container>
      </section>

      <ImageGalleryJsonLd
        name={`${kategorie.label} – Referenzen`}
        description={kategorie.text}
        url={`/referenzen/${slug}`}
        images={bilder}
      />

      <section className="border-t border-stone-200 py-16">
        <Container size="wide">
          <h2 className="font-display text-2xl font-extrabold text-stone-900">
            Weitere Arbeitsbereiche
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {weitere.map((eintrag) => (
              <li key={eintrag.slug}>
                <Link
                  href={`/referenzen/${eintrag.slug}`}
                  className="inline-block border-2 border-stone-300 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  {eintrag.label}
                  <span className="ml-2 text-stone-400">{eintrag.anzahl}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        title="Etwas Ähnliches für Ihr Zuhause?"
        text="Erzählen Sie uns, welche Technik Sie anspricht – wir prüfen, ob und wie sie sich bei Ihnen umsetzen lässt."
      />
    </>
  );
}
