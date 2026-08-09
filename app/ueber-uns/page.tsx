import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/container";
import { CtaSection } from "../components/cta-section";
import { PageHeader } from "../components/page-header";
import { sliderBilder } from "../lib/gallery";
import { site } from "../lib/site";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Über uns – Ihr Maler in Eichwalde",
  description:
    "Ihr Fachmann für Wohnraumgestaltung in Eichwalde: Altbausanierung, Fassaden, Tapezierarbeiten und kreative Maltechniken. Meisterbetrieb seit 1977.",
  path: "/ueber-uns",
});

const versprechen = [
  "Beratung und Aufmaß direkt bei Ihnen vor Ort",
  "Fachgerechte Analyse jedes Untergrundes",
  "Umweltbewusste, emissionsarme Materialien",
  "Sorgfältige und termingerechte Ausführung",
  "Saubere Baustelle und geschützte Möbel",
];

export default function UeberUns() {
  const bild = sliderBilder[0];

  return (
    <>
      <PageHeader
        krumen={[{ name: "Über uns", href: "/ueber-uns" }]}
        eyebrow="Über uns"
        title="Willkommen bei Ihrem Fachmann für Wohnraumgestaltung"
        intro="Qualitäts- und preisbewusst, sorgfältig und termingerecht – so verstehen wir unser Handwerk."
      />

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="rich-text text-lg">
                <p>
                  Mit uns haben Sie Ihren kompetenten Ansprechpartner rund um
                  das Thema Wohnraumgestaltung, Altbausanierung,
                  Fassadengestaltung, Malerarbeiten, Tapezierarbeiten und
                  kreative Maltechniken gefunden. Wir sind Ihr kompetenter,
                  qualitäts- und preisbewusster Ansprechpartner für Ihre Bau-
                  und Renovierungswünsche.
                </p>
                <p>
                  Außergewöhnliche Arbeiten auf hohem Niveau sind für uns ebenso
                  selbstverständlich wie die sorgfältige und termingerechte
                  Ausführung Ihres Bauvorhabens. Setzen Sie sich mit uns in
                  Verbindung – wir sind überzeugt, dass Sie in uns den richtigen
                  Partner gefunden haben.
                </p>

                <h2>Individuelle Wohnraumgestaltung</h2>
                <p>
                  Der Vorher-Nachher-Vergleich ist es uns wert, mit Ihnen ins
                  Gespräch zu kommen. Farben bringen Vielfalt ins Leben. Farben
                  schützen Wertvolles und Farben wirken sich auf das Wohlbefinden
                  aus.
                </p>
                <p>
                  Mit der kreativen Vielfalt, die sich aus der Anwendung von
                  Farben ergibt, entstehen hochwertige Lebensräume. Farbe
                  verleiht Ihrem Haus, dem Grundstück und den Wohnräumen
                  Wertigkeit und schafft Lebensqualität. Lassen Sie sich beraten
                  und neue Farbkonzepte für das erstellen, was Ihnen wichtig ist.
                </p>
              </div>

              <figure className="mt-10">
                <Image
                  src={bild.src}
                  alt={bild.alt}
                  width={bild.width}
                  height={bild.height}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-2 text-sm text-stone-500">
                  Spachteltechnik in warmem Altrosa – ausgeführt von {site.name}.
                </figcaption>
              </figure>

              <figure className="mt-10 border-l-4 border-sun-400 pl-6">
                <blockquote className="font-display text-2xl font-extrabold leading-snug text-stone-900">
                  Wir freuen uns auf Ihren Anruf.
                </blockquote>
                <figcaption className="mt-2 font-semibold text-signal-600">
                  {site.jobTitle} {site.owner}
                </figcaption>
              </figure>
            </div>

            <aside className="space-y-6">
              <div className="border-t-4 border-brand-600 bg-stone-50 p-7">
                <h2 className="font-display text-xl font-extrabold text-stone-900">
                  Was Sie von uns erwarten können
                </h2>
                <ul className="mt-4 space-y-3 text-stone-700">
                  {versprechen.map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span aria-hidden className="mt-0.5 font-extrabold text-signal-500">
                        ✓
                      </span>
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-800 p-7 text-white">
                <h2 className="font-display text-xl font-extrabold">
                  Direkt sprechen
                </h2>
                <p className="mt-2 text-brand-100">
                  Am schnellsten geht es telefonisch.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 block bg-sun-400 px-6 py-3.5 text-center font-extrabold text-brand-900 transition-colors hover:bg-sun-300"
                >
                  {site.phone}
                </a>
                <Link
                  href="/leistungen"
                  className="mt-3 block text-center font-bold text-sun-300 hover:text-sun-200"
                >
                  Alle Leistungen ansehen →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
