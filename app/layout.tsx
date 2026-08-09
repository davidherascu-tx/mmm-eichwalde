import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { LocalBusinessJsonLd } from "./lib/structured-data";
import { site } from "./lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Kräftige Grotesk für Überschriften – nimmt den Charakter des Logos auf.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Titel bleiben unter ~60 Zeichen, sonst kürzt Google sie im Ergebnis ab.
    default: `Malermeister ${site.city} – Maler-Meister Meyer`,
    template: "%s | Malermeister Meyer",
  },
  description:
    "Malermeister in Eichwalde: Anstrich- und Tapezierarbeiten, Kreativ- und Spachteltechniken, Lackierungen sowie Altbausanierung. Familienbetrieb seit 1977.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: "/",
    title: `Malermeister ${site.city} – Maler-Meister Meyer`,
    description:
      "Ihr Partner für individuelle Wohnraumgestaltung: Anstrich, Tapeten, Kreativtechniken, Lackierungen und Altbausanierung. Meisterbetrieb seit 1977.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Malermeister ${site.city} – Maler-Meister Meyer`,
    description:
      "Meisterbetrieb für Wohnraumgestaltung, Fassaden und Altbausanierung in Eichwalde.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Handwerk",
  formatDetection: { telephone: true, address: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivo.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
