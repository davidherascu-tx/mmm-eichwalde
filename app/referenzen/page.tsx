import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/container";
import { CtaSection } from "../components/cta-section";
import { PageHeader } from "../components/page-header";
import { albumDeckel } from "../lib/gallery";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Referenzen – unsere Arbeiten",
  description:
    "Bilder unserer Arbeiten: Farbgestaltung, Tapezierarbeiten, Spachtel- und Lasurtechniken, Stuckarbeiten, Außenarbeiten und Fußbodenbeschichtungen.",
  path: "/referenzen",
});

export default function Referenzen() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Referenzen", href: "/referenzen" }]}
        eyebrow="Referenzen"
        title="Unsere Arbeiten im Überblick"
        intro="Wählen Sie einen Bereich aus, um alle Bilder daraus zu sehen."
      />

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albumDeckel.map((album) => (
              <li key={album.slug}>
                <Link
                  href={`/referenzen/${album.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-stone-200 bg-white transition-colors hover:border-brand-500"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={album.bild.src}
                      alt={album.bild.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* Gestapelte Kanten – deutet an, dass mehrere Bilder dahinterliegen. */}
                    <span className="absolute right-4 top-4 bg-stone-900/80 px-3 py-1.5 text-sm font-extrabold text-white">
                      {album.anzahl} Bilder
                    </span>
                  </span>

                  <span className="flex flex-1 flex-col border-t-4 border-transparent p-6 transition-colors group-hover:border-sun-400">
                    <span className="font-display text-xl font-extrabold text-stone-900">
                      {album.label}
                    </span>
                    <span className="mt-2 flex-1 leading-relaxed text-stone-600">
                      {album.text}
                    </span>
                    <span className="mt-4 font-bold text-brand-600 transition-transform group-hover:translate-x-1">
                      Album öffnen →
                    </span>
                  </span>
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
