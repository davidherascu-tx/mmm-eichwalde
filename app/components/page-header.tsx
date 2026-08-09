import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./container";
import { BreadcrumbJsonLd, type Krume } from "../lib/structured-data";

export function PageHeader({
  eyebrow,
  title,
  intro,
  krumen,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /**
   * Pfad ohne die Startseite, z. B. [{ name: "Referenzen", href: "/referenzen" }].
   * Speist sowohl die sichtbaren Brotkrumen als auch das JSON-LD für Google.
   */
  krumen: Krume[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-brand-800 text-white">
      <div aria-hidden className="flex h-1.5 w-full">
        <span className="flex-1 bg-brand-500" />
        <span className="flex-1 bg-signal-500" />
        <span className="flex-1 bg-sun-400" />
      </div>

      <Container size="wide">
        <div className="py-12 sm:py-16">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm font-medium text-brand-200">
            <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
              Startseite
            </Link>
            {krumen.map((krume, index) => {
              const letzte = index === krumen.length - 1;
              return (
                <span key={krume.href}>
                  <span className="px-2 text-brand-400">/</span>
                  {letzte ? (
                    <span className="text-white">{krume.name}</span>
                  ) : (
                    <Link
                      href={krume.href}
                      className="underline-offset-4 hover:text-white hover:underline"
                    >
                      {krume.name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          <p className="inline-block bg-sun-400 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-900">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
              {intro}
            </p>
          )}
          {children}
        </div>
      </Container>

      <BreadcrumbJsonLd items={krumen} />
    </section>
  );
}
