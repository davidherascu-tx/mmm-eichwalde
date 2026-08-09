import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/container";
import { CtaSection } from "../components/cta-section";
import { PageHeader } from "../components/page-header";
import { leistungen } from "../lib/leistungen";
import { referenzen } from "../lib/gallery";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Leistungen – Malerarbeiten & Sanierung",
  description:
    "Anstrich- und Tapezierarbeiten, Kreativ- und Spachteltechniken, Lackierungen vor Ort sowie Altbausanierung und Schimmelbeseitigung in Eichwalde.",
  path: "/leistungen",
});

/** Passendes Referenzbild je Leistung. */
const bilder: Record<string, string> = {
  anstricharbeiten: "/images/referenzen/farbgestaltung/farbgestaltung-3.webp",
  tapezierarbeiten: "/images/referenzen/tapezierarbeiten/tapezierarbeiten-2.webp",
  kreativtechniken: "/images/referenzen/spachteltechniken/spachteltechniken-4.webp",
  lackierarbeiten: "/images/referenzen/spritzarbeiten/spritzarbeiten-1.webp",
  altbausanierung: "/images/referenzen/aussenarbeiten/aussenarbeiten-1.webp",
};

const bildDaten = (slug: string) => {
  const src = bilder[slug];
  const treffer = referenzen.find((bild) => bild.src === src);
  if (!treffer) throw new Error(`Kein Referenzbild für Leistung "${slug}" gefunden.`);
  return treffer;
};

export default function Leistungen() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Leistungen", href: "/leistungen" }]}
        eyebrow="Leistungen"
        title="Was wir für Sie tun können"
        intro="Nach fachgerechter Analyse des Untergrundes wählen wir geeignete Werkstoffe aus und verarbeiten sie sauber, sorgfältig und termingerecht."
      >
        <ul className="mt-9 flex flex-wrap gap-2">
          {leistungen.map((leistung) => (
            <li key={leistung.slug}>
              <a
                href={`#${leistung.slug}`}
                className="inline-block border-2 border-white/30 px-4 py-2 text-sm font-bold text-brand-50 transition-colors hover:border-white hover:bg-white/10"
              >
                {leistung.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      {leistungen.map((leistung, index) => {
        const bild = bildDaten(leistung.slug);
        return (
          <section
            key={leistung.slug}
            id={leistung.slug}
            className={`scroll-mt-32 py-16 sm:py-20 ${
              index % 2 === 1 ? "bg-stone-50" : "bg-white"
            }`}
          >
            <Container size="wide">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <figure className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={bild.src}
                    alt={`${leistung.title} – ausgeführte Arbeit`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>

                <div>
                  <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-signal-600">
                    Leistung {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
                    {leistung.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed text-stone-600">
                    {leistung.body.map((absatz) => (
                      <p key={absatz.slice(0, 40)}>{absatz}</p>
                    ))}
                  </div>
                  <Link
                    href="/kontakt"
                    className="mt-7 inline-block bg-brand-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-700"
                  >
                    Angebot anfragen
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="border-t border-stone-200 py-20">
        <Container size="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-extrabold text-stone-900">
              Ausgeführte Arbeiten
            </h2>
            <Link
              href="/referenzen"
              className="border-2 border-stone-300 px-6 py-3.5 font-bold text-stone-800 transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              Zur Referenzgalerie
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["stuckarbeiten", "lasurtechniken", "beschriftungen", "akustik-spritzputz"].map(
              (slug) => {
                const bild = referenzen.find((eintrag) => eintrag.category === slug);
                if (!bild) return null;
                return (
                  <li key={slug} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={bild.src}
                      alt={bild.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </li>
                );
              }
            )}
          </ul>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
