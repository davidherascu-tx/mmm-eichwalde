import Image from "next/image";
import { marke, site } from "../lib/site";

/**
 * Das freigestellte Logo mit weggeschnittenem Leerraum.
 *
 * Die Datei `mmm_logo.png` ist 1536 × 1024 groß, die Grafik darin sitzt aber
 * nur zwischen y 223 und y 703 – oben bleiben 22 %, unten 31 % transparenter
 * Rand. Unbeschnitten wirkt das überall wie ein Layoutfehler. Der Rahmen mit
 * festem Seitenverhältnis schneidet den Überstand weg; `object-position`
 * verschiebt so, dass oben und unten gleich viel Luft bleibt.
 *
 * Wird die Logodatei ersetzt, müssen `aspect` und `object-position` neu
 * bestimmt werden – sonst schneidet der Rahmen in die Grafik.
 */
export function MarkenLogo({
  className = "",
  sizes,
  priority = false,
}: {
  /** Breite steuern, z. B. "w-72" – die Höhe ergibt sich aus dem Verhältnis. */
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[1536/580] overflow-hidden ${className}`}>
      <Image
        src={marke.logoTransparent.src}
        alt={site.name}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-[center_39%]"
      />
    </div>
  );
}
