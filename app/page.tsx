import Image from "next/image";
import Link from "next/link";
import { Container } from "./components/container";
import { CtaSection } from "./components/cta-section";
import { HeroSlider } from "./components/hero-slider";
import { leistungen } from "./lib/leistungen";
import { marke, partner, site } from "./lib/site";

const kennzahlen = [
  { wert: `seit ${site.foundedYear}`, label: "Familienbetrieb" },
  { wert: "3.", label: "Generation im Handwerk" },
  { wert: "3", label: "Meisterbriefe im Haus" },
];

export default function Startseite() {
  return (
    <>
      <HeroSlider />

      {/* Vertrauensleiste */}
      <section className="border-b border-stone-200 bg-stone-50">
        <Container size="wide">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-3">
            {kennzahlen.map((kennzahl) => (
              <div key={kennzahl.label}>
                <dt className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                  {kennzahl.wert}
                </dt>
                <dd className="mt-1 text-sm font-semibold uppercase tracking-wide text-stone-500">
                  {kennzahl.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Begrüßung */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-signal-600">
                Willkommen
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
                Ihr Fachmann für Wohnraumgestaltung und Malerarbeiten
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-600">
                <p>
                  Mit uns haben Sie Ihren kompetenten Ansprechpartner rund um
                  Wohnraumgestaltung, Altbausanierung, Fassadengestaltung,
                  Maler- und Tapezierarbeiten sowie kreative Maltechniken
                  gefunden.
                </p>
                <p>
                  Außergewöhnliche Arbeiten auf hohem Niveau sind für uns ebenso
                  selbstverständlich wie die sorgfältige und termingerechte
                  Ausführung Ihres Bauvorhabens.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ueber-uns"
                  className="bg-brand-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-700"
                >
                  Mehr über uns
                </Link>
                <Link
                  href="/unternehmen"
                  className="border-2 border-stone-300 px-6 py-3.5 font-bold text-stone-800 transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  Unsere Geschichte
                </Link>
              </div>
            </div>

            <div>
              {/* Freigestellte Wort-Bild-Marke – ohne Rahmen und Schatten,
                  damit der transparente Hintergrund wirken kann. */}
              <Image
                src={marke.logoTransparent.src}
                alt={`Logo des ${site.name}`}
                width={marke.logoTransparent.width}
                height={marke.logoTransparent.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <p className="mt-4 border-l-4 border-sun-400 pl-4 font-display text-xl font-bold leading-snug text-stone-800">
                „Farben bringen Vielfalt ins Leben.“
                <span className="mt-1 block text-sm font-semibold text-stone-500">
                  {site.jobTitle} {site.owner}
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungen */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <Container size="wide">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-signal-600">
              Leistungen
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
              Von der Decke bis zum Boden
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Innen oder außen – wir gestalten, schützen und erneuern nahezu
              jeden Untergrund. Nach fachgerechter Analyse wählen wir die
              passenden Werkstoffe aus.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((leistung, index) => (
              <li key={leistung.slug}>
                <Link
                  href={`/leistungen#${leistung.slug}`}
                  className="group flex h-full flex-col border-t-4 border-stone-200 bg-white p-7 transition-colors hover:border-sun-400"
                >
                  <span className="font-display text-sm font-extrabold text-stone-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold text-stone-900">
                    {leistung.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-stone-600">
                    {leistung.teaser}
                  </p>
                  <span className="mt-5 font-bold text-brand-600 transition-transform group-hover:translate-x-1">
                    Details ansehen →
                  </span>
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/kontakt"
                className="flex h-full flex-col justify-between border-t-4 border-signal-500 bg-brand-800 p-7 text-white"
              >
                <h3 className="font-display text-xl font-extrabold">
                  Etwas anderes im Sinn?
                </h3>
                <p className="mt-3 leading-relaxed text-brand-100">
                  Sprechen Sie uns an. Wir schauen uns Ihr Vorhaben vor Ort an
                  und beraten Sie ehrlich.
                </p>
                <span className="mt-5 font-bold text-sun-300">
                  Kontakt aufnehmen →
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Innung und Partner */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-signal-600">
              Mitgliedschaft & Partner
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
              Innungsfachbetrieb mit starken Partnern
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Als Innungsfachbetrieb sind wir an die Qualitätsstandards des
              Maler- und Lackiererhandwerks gebunden. Bei Material und Technik
              arbeiten wir mit etablierten Herstellern zusammen.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {partner.map((eintrag) => (
              <li
                key={eintrag.src}
                className="flex flex-col gap-5 border-t-4 border-brand-600 bg-stone-50 p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8"
              >
                <Image
                  src={eintrag.src}
                  alt={eintrag.alt}
                  width={eintrag.width}
                  height={eintrag.height}
                  sizes="180px"
                  className="h-20 w-auto shrink-0 sm:h-24"
                />
                {/* min-w-0: sonst sprengen lange Wörter wie
                    "Innungsfachbetrieb" die Flex-Spalte auf schmalen Displays. */}
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-extrabold text-stone-900">
                    {eintrag.label}
                  </h3>
                  <p className="mt-1 leading-relaxed text-stone-600">
                    {eintrag.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
