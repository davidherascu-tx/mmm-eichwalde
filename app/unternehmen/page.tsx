import type { Metadata } from "next";
import { Container } from "../components/container";
import { CtaSection } from "../components/cta-section";
import { ImageGallery } from "../components/image-gallery";
import { PageHeader } from "../components/page-header";
import { meisterbriefe } from "../lib/gallery";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Unternehmen – Familienbetrieb seit 1977",
  description:
    "Der Malerbetrieb Meyer aus Eichwalde: 1977 gegründet, heute in dritter Generation als Meisterbetrieb geführt. Drei Meisterbriefe im Haus.",
  path: "/unternehmen",
});

const meilensteine = [
  {
    jahr: "Mai 1977",
    titel: "Gründung durch Wolfgang Meyer",
    text: "Wolfgang Meyer gründet den Maler-Meisterbetrieb als eigenständigen Handwerksbetrieb – ohne VEB. Im Oktober desselben Jahres schließt er seine Ausbildung als Meister des Handwerks ab.",
  },
  {
    jahr: "bis 1988",
    titel: "Henry Meyer im Familienbetrieb",
    text: "Sohn Henry Meyer arbeitet als Angestellter unter der Leitung von Wolfgang Meyer im Familienbetrieb mit.",
  },
  {
    jahr: "1988",
    titel: "Meisterprüfung Henry Meyer",
    text: "Henry Meyer legt seine Meisterprüfung im Maler- und Lackiererhandwerk ab.",
  },
  {
    jahr: "01.04.1990",
    titel: "Eigener Betrieb",
    text: "Henry Meyer eröffnet seinen eigenen Betrieb und arbeitet weiterhin eng mit seinem Vater zusammen.",
  },
  {
    jahr: "1992",
    titel: "Übergabe der Generation",
    text: "Nach zwei gemeinsamen Jahren geht Wolfgang Meyer in Rente. Der Betrieb wird von Henry Meyer allein weitergeführt.",
  },
  {
    jahr: "2000",
    titel: "Lars Meyer steigt ein",
    text: "Mit Lars Meyer tritt die dritte Generation als Angestellter in die Firma ein.",
  },
  {
    jahr: "2009",
    titel: "Meisterprüfung Lars Meyer",
    text: "Lars Meyer besteht am 22. September 2009 die Meisterprüfung vor der Handwerkskammer Berlin und führt die Familientradition als Meisterbetrieb fort.",
  },
];

export default function Unternehmen() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Unternehmen", href: "/unternehmen" }]}
        eyebrow="Unternehmen"
        title="Drei Generationen Malerhandwerk"
        intro="Was 1977 als kleiner Handwerksbetrieb begann, wird heute in dritter Generation als Meisterbetrieb geführt."
      />

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold text-stone-900">
              Unsere Geschichte
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Der Maler-Meisterbetrieb wurde im Mai 1977 durch Wolfgang Meyer –
              ohne VEB – gegründet. Sein Sohn Henry Meyer arbeitete als
              Angestellter unter der Leitung von Wolfgang Meyer im
              Familienbetrieb. Nach seiner Meisterprüfung 1988 eröffnete er am
              1. April 1990 seinen eigenen Betrieb und arbeitete bis 1992 mit
              seinem Vater zusammen, der dann in Rente ging. Im Jahr 2000 stieg
              der Sohn Lars Meyer als Angestellter in die Firma ein und machte
              2009 seinen Meister.
            </p>
          </div>

          <ol className="mt-14 grid gap-x-8 gap-y-0 md:grid-cols-2">
            {meilensteine.map((meilenstein, index) => (
              <li
                key={meilenstein.jahr}
                className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className={`absolute bottom-0 left-[0.5625rem] top-7 w-0.5 bg-stone-200 ${
                    index === meilensteine.length - 1 ? "hidden" : ""
                  }`}
                />
                <span
                  aria-hidden
                  className="relative z-10 mt-1.5 h-5 w-5 shrink-0 rounded-full border-4 border-white bg-signal-500 ring-2 ring-stone-200"
                />
                <div>
                  <p className="font-display text-sm font-extrabold uppercase tracking-wide text-signal-600">
                    {meilenstein.jahr}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-stone-900">
                    {meilenstein.titel}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    {meilenstein.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-stone-50 py-20 sm:py-24">
        <Container size="wide">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-signal-600">
              Meisterbriefe
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">
              Drei Meister, eine Familie
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Vom Meisterbrief des Gründers aus dem Jahr 1977 bis zur
              Meisterprüfung der dritten Generation 2009.
            </p>
          </div>

          <div className="mt-12">
            <ImageGallery images={meisterbriefe} orientation="portrait" showDetail />
          </div>
        </Container>
      </section>

      <CtaSection
        title="Handwerk mit Handschlagqualität"
        text="Ein Familienbetrieb lebt von zufriedenen Kundinnen und Kunden. Sprechen Sie mit uns über Ihr Vorhaben."
      />
    </>
  );
}
