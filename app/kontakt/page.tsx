import type { Metadata } from "next";
import { Container } from "../components/container";
import { ContactForm } from "../components/contact-form";
import { MarkenLogo } from "../components/marken-logo";
import { PageHeader } from "../components/page-header";
import { mapsUrl, site } from "../lib/site";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Kontakt & Anfahrt",
  description:
    "Malerbetrieb Lars Meyer, Uhlandallee 27, 15732 Eichwalde. Telefon 0176 / 530 69 633. Kostenlose Beratung und Aufmaß vor Ort – jetzt anfragen.",
  path: "/kontakt",
});

export default function Kontakt() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Kontakt", href: "/kontakt" }]}
        eyebrow="Kontakt"
        title="Sprechen Sie uns an"
        intro="Am schnellsten erreichen Sie uns telefonisch. Alternativ schreiben Sie uns eine E-Mail oder nutzen Sie das Formular."
      />

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-6">
              <MarkenLogo
                className="w-full"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority
              />

              <div className="bg-brand-800 p-8 text-white">
                <h2 className="font-display text-2xl font-extrabold">
                  {site.legalName}
                </h2>
                <address className="mt-5 space-y-1 not-italic leading-relaxed text-brand-100">
                  <p>{site.street}</p>
                  <p>
                    {site.postalCode} {site.city}
                  </p>
                  <p>{site.region}</p>
                  <p>Bundesrepublik {site.country}</p>
                </address>

                <dl className="mt-7 space-y-4 border-t border-white/20 pt-7">
                  <div>
                    <dt className="text-sm font-extrabold uppercase tracking-wider text-sun-300">
                      Mobilfunk
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={site.phoneHref}
                        className="font-display text-2xl font-extrabold hover:text-sun-300"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-extrabold uppercase tracking-wider text-sun-300">
                      E-Mail
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.email}`}
                        className="break-all font-bold hover:text-sun-300"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 block bg-sun-400 px-6 py-3.5 text-center font-extrabold text-brand-900 transition-colors hover:bg-sun-300"
                >
                  Anfahrt auf OpenStreetMap
                </a>
                <p className="mt-3 text-center text-xs text-brand-200">
                  Öffnet in einem neuen Tab. Wir binden bewusst keine externe
                  Karte direkt ein – so werden ohne Ihr Zutun keine Daten an
                  Dritte übertragen.
                </p>
              </div>

              <div className="border-t-4 border-brand-600 bg-stone-50 p-8">
                <h2 className="font-display text-xl font-extrabold text-stone-900">
                  Termine
                </h2>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Beratungs- und Aufmaßtermine vereinbaren wir individuell –
                  auch außerhalb der üblichen Arbeitszeiten. Rufen Sie einfach
                  an, wir finden einen passenden Termin.
                </p>
              </div>
            </div>

            <div className="border border-stone-200 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-stone-900">
                Ihre Anfrage
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600">
                Je mehr wir über Ihr Vorhaben wissen, desto genauer können wir
                Ihnen antworten. Wir melden uns in der Regel innerhalb von zwei
                Werktagen.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
