import type { ReactNode } from "react";

/**
 * Markiert Angaben, die vor dem Livegang durch echte Daten ersetzt werden
 * müssen. Absichtlich auffällig – ein übersehener Platzhalter im Impressum
 * ist ein Abmahnrisiko.
 */
export function Platzhalter({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-sun-200 px-1.5 py-0.5 font-bold text-stone-900">
      [{children}]
    </mark>
  );
}

export function RechtsHinweis() {
  return (
    <div className="mb-10 border-l-4 border-signal-500 bg-signal-50 p-6">
      <p className="font-display font-extrabold text-signal-800">
        Hinweis für den Betreiber – vor Veröffentlichung entfernen
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone-700">
        Dieser Text ist ein sorgfältig vorbereiteter Entwurf, aber keine
        Rechtsberatung. Alle{" "}
        <mark className="bg-sun-200 px-1 font-bold text-stone-900">
          [markierten Stellen]
        </mark>{" "}
        müssen durch die tatsächlichen Angaben ersetzt und der Gesamttext vor
        dem Livegang anwaltlich oder durch die Handwerkskammer geprüft werden.
      </p>
    </div>
  );
}
