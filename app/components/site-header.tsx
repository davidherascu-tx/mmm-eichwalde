"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { mainNav, marke, site } from "../lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Die Seite hinter dem geöffneten Menü darf nicht mitscrollen.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Kontaktleiste – die Telefonnummer ist das Wichtigste auf einer Handwerkerseite. */}
      <div className="bg-brand-700 text-white">
        <Container size="wide">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-sm">
            <p className="font-medium">
              Meisterbetrieb seit {site.foundedYear} · {site.postalCode} {site.city}
            </p>
            <div className="flex items-center gap-5">
              <a
                className="hidden font-medium underline-offset-4 hover:underline sm:inline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <a
                className="font-bold text-sun-300 underline-offset-4 hover:underline"
                href={site.phoneHref}
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide">
        <div className="flex items-center justify-between gap-6 py-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} – zur Startseite`}>
            <Image
              src={marke.logo.src}
              alt={site.name}
              width={marke.logo.width}
              height={marke.logo.height}
              priority
              sizes="(min-width: 640px) 400px, 280px"
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block px-3 py-2 text-[0.95rem] font-bold transition-colors ${
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-stone-700 hover:text-brand-600"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-sun-400 transition-opacity ${
                        isActive(item.href) ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden shrink-0 rounded-sm bg-signal-500 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-signal-600 md:inline-flex"
            >
              Anrufen
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-600 px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white xl:hidden"
            >
              <span className="sr-only">Navigation </span>
              {open ? "Schließen" : "Menü"}
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Hauptnavigation (mobil)"
          className="border-t-4 border-sun-400 bg-white xl:hidden"
          onClick={() => setOpen(false)}
        >
          <Container size="wide">
            <ul className="flex flex-col py-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block border-b border-stone-100 py-3.5 text-lg font-bold ${
                      isActive(item.href) ? "text-brand-600" : "text-stone-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pb-5 pt-4">
              <a
                href={site.phoneHref}
                className="rounded-sm bg-signal-500 px-5 py-3.5 text-center font-extrabold text-white"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-sm border-2 border-stone-200 px-5 py-3.5 text-center font-bold text-stone-800"
              >
                {site.email}
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M5 5l10 10" />
          <path d="M15 5L5 15" />
        </>
      ) : (
        <>
          <path d="M3 6h14" />
          <path d="M3 10h14" />
          <path d="M3 14h14" />
        </>
      )}
    </svg>
  );
}
