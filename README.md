# Malermeister Meyer – Eichwalde

Website des Maler-Meisterbetriebs Lars Meyer, Uhlandallee 27, 15732 Eichwalde.
Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, TypeScript.

## Entwicklung

```bash
npm run dev
```

Weitere Skripte: `npm run build`, `npm run start`, `npm run lint`.

## Seitenstruktur

| Route              | Datei                          | Inhalt                                     |
| ------------------ | ------------------------------ | ------------------------------------------ |
| `/`                | `app/page.tsx`                 | Startseite mit Bild-Slider                 |
| `/ueber-uns`       | `app/ueber-uns/page.tsx`       | Über uns                                   |
| `/unternehmen`     | `app/unternehmen/page.tsx`     | Firmengeschichte als Zeitstrahl            |
| `/leistungen`      | `app/leistungen/page.tsx`      | Fünf Leistungen mit Sprungmarken           |
| `/qualifikationen` | `app/qualifikationen/page.tsx` | Zertifikatsgalerie mit Lightbox            |
| `/referenzen`      | `app/referenzen/page.tsx`      | Albumübersicht der zehn Arbeitsbereiche    |
| `/referenzen/…`    | `app/referenzen/[kategorie]/page.tsx` | Bilder eines Albums mit Lightbox    |
| `/kontakt`         | `app/kontakt/page.tsx`         | Kontaktdaten und Formular                  |
| `/impressum`       | `app/impressum/page.tsx`       | Impressum                                  |
| `/datenschutz`     | `app/datenschutz/page.tsx`     | Datenschutzerklärung                       |

`app/sitemap.ts` und `app/robots.ts` erzeugen `sitemap.xml` und `robots.txt`.

## Bilder

Alle Bilder liegen unter `public/`. Die Pixelmaße stehen in
`app/lib/image-sizes.json` und werden erzeugt mit:

```bash
npm run images
```

Nach jedem Hinzufügen, Löschen oder Umbenennen von Bildern dieses Skript
ausführen – sonst bricht der Build mit einer klaren Fehlermeldung ab.

Namenskonvention der Referenzen: `public/images/referenzen/<kategorie>/<kategorie>-<n>.webp`,
durchnummeriert ab 1. Neue Kategorie oder neue Bilder? In `app/lib/gallery.ts`
die Liste `referenzKategorien` ergänzen bzw. `anzahl` erhöhen. Jede Kategorie
wird daraus automatisch zu einem Album unter `/referenzen/<kategorie>`.

Pro Kategorie steuert `cover` (Bildnummer), welches Bild als Albumdeckel dient –
ohne Angabe ist es Bild 1. `text` ist die Kurzbeschreibung auf der Übersicht.

Dateinamen sind bewusst durchgehend kleingeschrieben und ohne Umlaute – so
funktionieren sie auf jedem Server und CDN zuverlässig.

### Die beiden Logodateien

| Datei                   | Format    | Einsatz                                    |
| ----------------------- | --------- | ------------------------------------------ |
| `mmm_logo_white.png`    | weißer Grund | Header – die Grafik füllt 76 % der Bildhöhe |
| `mmm_logo.png`          | freigestellt | Footer, Startseite, Kontakt – auf jedem Untergrund |

Achtung beim Austauschen: Im freigestellten Logo füllt die Grafik nur 47 % der
Dateihöhe. Bei gleicher CSS-Höhe wirkt es deshalb kleiner als die Header-Version
– die Klassenhöhen im Footer sind darauf abgestimmt.

## Vor dem Livegang zu erledigen

1. **Kontaktformular scharf schalten.** `app/kontakt/actions.ts` validiert die
   Eingaben serverseitig, verschickt aber noch **keine** E-Mail. An der mit
   `TODO(Versand einrichten)` markierten Stelle muss ein Mailversand angebunden
   werden (Resend, Postmark, Brevo oder SMTP via nodemailer). Zugangsdaten
   gehören in Umgebungsvariablen.
2. **Rechtstexte prüfen.** Impressum und Datenschutzerklärung enthalten farbig
   markierte Platzhalter (`app/components/platzhalter.tsx`) für USt-IdNr.,
   Handwerkskammer, Hosting-Anbieter und Aufsichtsbehörde. Alle Platzhalter
   ersetzen und den Hinweiskasten `<RechtsHinweis />` aus beiden Seiten
   entfernen. Die Texte sind ein Entwurf, keine Rechtsberatung.
3. **Domain eintragen.** In der Hosting-Umgebung `NEXT_PUBLIC_SITE_URL` auf die
   echte Domain setzen (siehe `.env.example`). Der Wert steuert `metadataBase`,
   alle Canonical-URLs, die Sitemap, `robots.txt` und die absoluten Bild-URLs
   der Social-Media-Vorschau. Ohne ihn zeigen alle diese Angaben auf den
   Platzhalter `www.malermeister-eichwalde.de`.
4. **Hausnummer im Logo prüfen.** Die Grafik `public/mmm_logo_white.png` nennt
   „Uhlandallee 24", die Website durchgängig „Uhlandallee 27". Solange die
   Logodatei nicht ersetzt ist, widersprechen sich Header und Impressum.

## Gestaltung

Die Farben stammen direkt aus dem Logo und sind in `app/globals.css` definiert:

| Rolle    | Tailwind   | Hex       | Einsatz                        |
| -------- | ---------- | --------- | ------------------------------ |
| Blau     | `brand-500`  | `#1860b4` | Flächen, Links, Hauptbuttons   |
| Rot      | `signal-500` | `#e41818` | Akzente, Fehler, „Anrufen"     |
| Gelb     | `sun-400`    | `#fccc24` | Hervorhebungen, aktive Zustände |
| Neutral  | `stone-*`    | –         | Text und Flächen               |

Der dreifarbige Streifen (Blau/Rot/Gelb) über Seitenkopf, Hero und Footer
nimmt den Schwung des Logos auf und hält die Seiten zusammen.

## SEO

- **Metadaten der Unterseiten** laufen über `seitenMetadata()` in `app/lib/seo.ts`.
  Immer diesen Helfer verwenden: ein selbst geschriebener `openGraph`-Block
  ersetzt den geerbten vollständig – dann fehlt Unterseiten das Vorschaubild.
- **Titel** inklusive Suffix unter 60 Zeichen halten, **Beschreibungen** unter
  160, sonst kürzt Google im Suchergebnis ab.
- **Vorschaubild** für WhatsApp, Facebook & Co.: `app/opengraph-image.tsx`
  (1200 × 630, wird zur Buildzeit gerendert). `app/twitter-image.tsx` nutzt
  dasselbe Motiv.
- **Favicon**: `app/icon.svg`, für iOS zusätzlich `app/apple-icon.tsx`.
- **Strukturierte Daten**: `app/lib/structured-data.tsx` liefert
  `HomeAndConstructionBusiness` (im Root-Layout), `BreadcrumbList` (über
  `PageHeader`, speist auch die sichtbaren Brotkrumen) und `ImageGallery`
  auf den Referenzalben.
- **Impressum und Datenschutz** stehen auf `noindex, follow` und bewusst nicht
  in der Sitemap – beides zugleich wäre ein widersprüchliches Signal.

Nach dem Deploy prüfen: Sitemap in der Google Search Console einreichen und die
strukturierten Daten mit dem [Rich Results Test](https://search.google.com/test/rich-results)
gegen die Live-URL testen.

## Inhalte pflegen

- **Stammdaten** (Adresse, Telefon, E-Mail, Navigation): `app/lib/site.ts`
- **Leistungen**: `app/lib/leistungen.ts`
- **Galerien und Kategorien**: `app/lib/gallery.ts`
- **Farben, Schriften, Fließtext-Stile**: `app/globals.css`

## Datenschutz by default

Es werden keine Cookies gesetzt, keine Analyse- oder Trackingdienste
eingebunden. Die Schriften (Inter, Archivo) werden über `next/font`
lokal ausgeliefert – es gibt keine Verbindung zu Google-Servern. Der
Kartendienst auf der Kontaktseite ist bewusst nur verlinkt, nicht eingebettet.
Diese Zusagen stehen so in der Datenschutzerklärung; werden weitere Dienste
ergänzt, muss der Text angepasst werden.
