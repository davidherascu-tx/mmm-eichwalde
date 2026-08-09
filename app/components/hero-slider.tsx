"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { sliderBilder } from "../lib/gallery";
import { site } from "../lib/site";

const INTERVAL_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % sliderBilder.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-brand-800">
      {/* Farbstreifen des Logos als durchgehendes Gestaltungsmotiv */}
      <div aria-hidden className="flex h-1.5 w-full">
        <span className="flex-1 bg-brand-500" />
        <span className="flex-1 bg-signal-500" />
        <span className="flex-1 bg-sun-400" />
      </div>

      <Container size="wide">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14 lg:py-16">
          <div className="text-white">
            <p className="inline-flex items-center gap-2 bg-sun-400 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-900">
              Meisterbetrieb in {site.city}
            </p>

            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
              Ihr Partner für individuelle Wohnraum&shy;gestaltung
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              Herzlich willkommen beim {site.name} aus {site.city}. Wir sind Ihr
              kompetenter Ansprechpartner für dekorative Innen-, Außen- und
              Bodengestaltung.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="bg-signal-500 px-7 py-4 text-center text-lg font-extrabold text-white transition-colors hover:bg-signal-600"
              >
                {site.phone}
              </a>
              <Link
                href="/leistungen"
                className="border-2 border-white/40 px-7 py-4 text-center text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Unsere Leistungen
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-brand-200">
              Rufen Sie uns an – wir beraten Sie gern!
            </p>
          </div>

          {/* Bildbühne: die Fotos stehen für sich, ohne dunkles Overlay. */}
          <div className="relative">
            <div className="relative aspect-[2/1] w-full overflow-hidden bg-brand-900 shadow-2xl">
              {sliderBilder.map((bild, bildIndex) => (
                <Image
                  key={bild.src}
                  src={bild.src}
                  alt={bild.alt}
                  fill
                  priority={bildIndex === 0}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={`object-cover transition-opacity duration-700 ${
                    bildIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              {sliderBilder.map((bild, bildIndex) => (
                <button
                  key={bild.src}
                  type="button"
                  onClick={() => setIndex(bildIndex)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  aria-label={`Bild ${bildIndex + 1} von ${sliderBilder.length} anzeigen`}
                  aria-current={bildIndex === index}
                  className={`h-2 rounded-full transition-all ${
                    bildIndex === index
                      ? "w-10 bg-sun-400"
                      : "w-5 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
