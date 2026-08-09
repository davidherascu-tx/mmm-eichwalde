import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { legalNav, mainNav, mapsUrl, partner, site } from "../lib/site";
import { leistungen } from "../lib/leistungen";
import { MarkenLogo } from "./marken-logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white text-stone-600">
      <div aria-hidden className="flex h-1.5 w-full">
        <span className="flex-1 bg-brand-500" />
        <span className="flex-1 bg-signal-500" />
        <span className="flex-1 bg-sun-400" />
      </div>

      <Container size="wide">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <MarkenLogo className="w-72 max-w-full" sizes="288px" />
            <p className="mt-5 text-sm leading-relaxed">
              Meisterbetrieb für dekorative Innen-, Außen- und Bodengestaltung.
              Familienbetrieb in dritter Generation – seit {site.foundedYear}.
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {partner.map((eintrag) => (
                <li key={eintrag.src}>
                  <Image
                    src={eintrag.src}
                    alt={eintrag.alt}
                    width={eintrag.width}
                    height={eintrag.height}
                    sizes="110px"
                    className="h-12 w-auto"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-signal-600">
              Kontakt
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed">
              <p className="font-bold text-stone-900">{site.legalName}</p>
              <p>{site.street}</p>
              <p>
                {site.postalCode} {site.city}
              </p>
              <p className="pt-2">
                <a
                  className="font-bold text-brand-600 hover:text-brand-800"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a className="hover:text-stone-900" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-block text-sm font-bold text-brand-600 hover:text-brand-800"
            >
              Auf der Karte ansehen →
            </a>
          </div>

          <div>
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-signal-600">
              Leistungen
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {leistungen.map((leistung) => (
                <li key={leistung.slug}>
                  <Link
                    href={`/leistungen#${leistung.slug}`}
                    className="hover:text-stone-900"
                  >
                    {leistung.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-signal-600">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-stone-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-stone-200 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-stone-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
