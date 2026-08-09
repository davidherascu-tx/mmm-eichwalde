import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../components/container";
import { CtaSection } from "../components/cta-section";
import { ImageGallery } from "../components/image-gallery";
import { PageHeader } from "../components/page-header";
import { qualifikationen } from "../lib/gallery";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Qualifikationen & Zertifikate",
  description:
    "Fachzertifikate für Schimmelsanierung, Spachtelmassen, Designböden und Trompe-l'œil – geprüft von Handwerkskammer Berlin, Brillux und Sto.",
  path: "/qualifikationen",
});

export default function Qualifikationen() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Qualifikationen", href: "/qualifikationen" }]}
        eyebrow="Qualifikationen"
        title="Geprüfte Qualität, schwarz auf weiß"
        intro="Fortbildungen und Fachzertifikate von Handwerkskammer, Brillux, Sto und Fakolith – klicken Sie auf ein Dokument, um es vergrößert anzusehen."
      />

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <ImageGallery images={qualifikationen} orientation="portrait" showDetail />

          <div className="mt-16 border-t-4 border-brand-600 bg-stone-50 p-8 sm:p-10">
            <h2 className="font-display text-2xl font-extrabold text-stone-900">
              Warum der Meisterbrief zählt
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">
              Der Meisterbrief steht für eine geprüfte fachliche Ausbildung, für
              Verantwortung gegenüber Kundinnen und Kunden und für die
              Ausbildungsberechtigung im Handwerk. Für Sie bedeutet das:
              fachgerechte Untergrundanalyse, sauber ausgeführte Arbeit und eine
              Ansprechperson, die für das Ergebnis geradesteht. Die drei
              Meisterbriefe unserer Familie finden Sie auf der Seite{" "}
              <Link
                href="/unternehmen"
                className="font-bold text-brand-600 underline underline-offset-4 hover:text-brand-800"
              >
                Unternehmen
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Fragen zu einer bestimmten Qualifikation?"
        text="Wir erklären Ihnen gern, welche Verfahren und Materialien für Ihr Vorhaben in Frage kommen."
      />
    </>
  );
}
