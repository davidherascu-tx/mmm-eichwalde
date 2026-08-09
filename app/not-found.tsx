import Link from "next/link";
import { Container } from "./components/container";
import { mainNav, site } from "./lib/site";

export default function NotFound() {
  return (
    <section className="bg-brand-800 py-24 text-white sm:py-32">
      <div aria-hidden className="mb-16 flex h-1.5 w-full">
        <span className="flex-1 bg-brand-500" />
        <span className="flex-1 bg-signal-500" />
        <span className="flex-1 bg-sun-400" />
      </div>

      <Container size="wide">
        <p className="font-display text-6xl font-extrabold text-sun-400">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
          Diese Seite konnten wir nicht finden
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
          Vielleicht wurde die Adresse geändert oder es hat sich ein Tippfehler
          eingeschlichen. Hier geht es zurück ins Haus:
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block border-2 border-white/30 px-5 py-2.5 font-bold transition-colors hover:border-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={site.phoneHref}
          className="mt-10 inline-block bg-signal-500 px-7 py-4 font-extrabold text-white transition-colors hover:bg-signal-600"
        >
          Lieber anrufen: {site.phone}
        </a>
      </Container>
    </section>
  );
}
