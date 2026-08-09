"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Category, GalleryImage } from "../lib/gallery";

type Props = {
  images: GalleryImage[];
  /** Wenn gesetzt, werden Filterschaltflächen über dem Raster gezeigt. */
  categories?: Category[];
  /** Hochformat passt zu Urkunden, Querformat zu Projektfotos. */
  orientation?: "landscape" | "portrait";
  /** Zeigt `detail` als Unterzeile in der Kachel (z. B. Anbieter und Jahr). */
  showDetail?: boolean;
  /** Beschriftung unter der Kachel. Bei Projektfotos bewusst aus. */
  showCaption?: boolean;
};

const ALL = "alle";

export function ImageGallery({
  images,
  categories,
  orientation = "landscape",
  showDetail = false,
  showCaption = true,
}: Props) {
  const [filter, setFilter] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === ALL ? images : images.filter((image) => image.category === filter)),
    [images, filter]
  );

  // Die Lightbox zählt über die *gefilterte* Liste – beim Filtern zurücksetzen.
  const selectFilter = (slug: string) => {
    setFilter(slug);
    setOpenIndex(null);
  };

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? null : (current + delta + visible.length) % visible.length
      ),
    [visible.length]
  );

  const aspect = orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div>
      {categories && (
        <div className="mb-10">
          <h2 className="sr-only">Nach Kategorie filtern</h2>
          <ul className="flex flex-wrap gap-2">
            {[{ slug: ALL, label: "Alle Arbeiten", anzahl: images.length }, ...categories].map(
              (category) => {
                const active = filter === category.slug;
                return (
                  <li key={category.slug}>
                    <button
                      type="button"
                      onClick={() => selectFilter(category.slug)}
                      aria-pressed={active}
                      className={`border-2 px-4 py-2 text-sm font-bold transition-colors ${
                        active
                          ? "border-brand-600 bg-brand-600 text-white"
                          : "border-stone-200 bg-white text-stone-700 hover:border-brand-400 hover:text-brand-700"
                      }`}
                    >
                      {category.label}
                      <span className={active ? "ml-2 text-brand-100" : "ml-2 text-stone-400"}>
                        {category.anzahl}
                      </span>
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {visible.length} Bilder werden angezeigt.
      </p>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${image.caption} – Bild vergrößert ansehen`}
              className="group block w-full overflow-hidden border border-stone-200 bg-white text-left transition-colors hover:border-brand-500"
            >
              <span className={`relative block w-full ${aspect} overflow-hidden bg-stone-100`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.04] ${
                    orientation === "portrait" ? "object-contain p-2" : "object-cover"
                  }`}
                />
              </span>
              {showCaption && (
                <span className="flex items-center justify-between gap-3 border-t-4 border-transparent px-4 py-3 transition-colors group-hover:border-sun-400">
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-stone-800">
                      {image.caption}
                    </span>
                    {showDetail && image.detail && (
                      <span className="mt-0.5 block truncate text-sm text-stone-500">
                        {image.detail}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-xl font-extrabold text-stone-300 transition-colors group-hover:text-brand-600"
                  >
                    +
                  </span>
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="border-2 border-dashed border-stone-200 px-6 py-16 text-center text-stone-500">
          Für diese Kategorie sind noch keine Bilder hinterlegt.
        </p>
      )}

      {openIndex !== null && visible[openIndex] && (
        <Lightbox
          image={visible[openIndex]}
          position={openIndex + 1}
          total={visible.length}
          showCaption={showCaption}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </div>
  );
}

function Lightbox({
  image,
  position,
  total,
  showCaption,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  position: number;
  total: number;
  showCaption: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex flex-col bg-stone-900/96 p-4 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex items-start justify-between gap-4 text-white">
        <div className="min-w-0">
          {/* Ohne Beschriftung bleibt der Kopf leer – der Zähler rechts genügt
              zur Orientierung, der Screenreader nutzt das aria-label. */}
          {showCaption && (
            <p className="font-display text-lg font-bold">{image.caption}</p>
          )}
          {showCaption && image.detail && (
            <p className="mt-0.5 text-sm text-stone-400">{image.detail}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden text-sm font-medium text-stone-400 sm:inline">
            {position} / {total}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white/30 px-4 py-2 text-sm font-bold transition-colors hover:border-white hover:bg-white/10"
          >
            Schließen
          </button>
        </div>
      </div>

      {/*
        `fill` statt fester Maße: bei width/height + w-auto hat das Bild vor dem
        Laden eine 0x0-Box, wodurch Lazy-Loading es nie anfordert.
        `min-h-0` verhindert, dass flex-1 über den Bildschirm hinauswächst.
      */}
      <div className="relative mt-4 min-h-0 flex-1">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="eager"
          sizes="(min-width: 768px) 85vw, 100vw"
          className="object-contain"
        />
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="border-2 border-white/30 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            ← Zurück
          </button>
          <span className="text-sm font-medium text-stone-400 sm:hidden">
            {position} / {total}
          </span>
          <button
            type="button"
            onClick={onNext}
            className="border-2 border-white/30 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Weiter →
          </button>
        </div>
      )}
    </div>
  );
}
