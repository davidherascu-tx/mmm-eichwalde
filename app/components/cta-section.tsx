import Link from "next/link";
import { Container } from "./container";
import { site } from "../lib/site";

export function CtaSection({
  title = "Wir freuen uns auf Ihren Anruf.",
  text = "Lassen Sie sich beraten und neue Farbkonzepte für das erstellen, was Ihnen wichtig ist. Der erste Schritt ist ein kurzes Gespräch – unverbindlich und kostenlos.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand-600 text-white">
      <Container size="wide">
        <div className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-50">{text}</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
            <a
              href={site.phoneHref}
              className="bg-sun-400 px-8 py-4 text-center text-lg font-extrabold text-brand-900 transition-colors hover:bg-sun-300"
            >
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white/50 px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
