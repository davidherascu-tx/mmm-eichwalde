export type Leistung = {
  slug: string;
  title: string;
  teaser: string;
  body: string[];
};

export const leistungen: Leistung[] = [
  {
    slug: "anstricharbeiten",
    title: "Anstricharbeiten aller Art",
    teaser:
      "Von der Decke bis zum Boden, innen wie außen: gestalten, schützen und erneuern.",
    body: [
      "Von der Decke bis zum Boden, im Außen- oder Innenbereich können wir (fast) alle Untergründe gestalten, schützen oder erneuern. Nach fachgerechter Analyse des Untergrundes werden geeignete Werkstoffe ausgesucht und fachgerecht verarbeitet.",
      "Die Auswahl der richtigen Beschichtung richtet sich nach den Bedürfnissen für den Innenbereich – von hochscheuerbeständigen, reinigungsfähigen Anstrichen bis zu Spezialfarben für Allergiker. Für den Außenbereich reicht die Spanne von mineralischen Anstrichen bis zu neuartigen Beschichtungen mit selbstreinigender Oberfläche.",
    ],
  },
  {
    slug: "tapezierarbeiten",
    title: "Tapezierarbeiten",
    teaser:
      "Von der Raufaser bis zur hochwertigen Vliesfaser mit Stuckdekorleisten.",
    body: [
      "Suchen Sie Ihre Tapeten in Ruhe zu Hause aus. Wir beraten Sie, wir verarbeiten und liefern für Sie von der Raufaser über die trendige Dekortapete im Bauhausstil bis zur hochwertigen Vliesfaser mit Stuckdekorleisten – fast alles, um Ihre Wände zu verschönern.",
    ],
  },
  {
    slug: "kreativtechniken",
    title: "Kreativtechniken / Spachteltechnik",
    teaser:
      "Wisch-, Wickel-, Spachtel-, Tupf-, Lasur- und Schabloniertechniken.",
    body: [
      "Zu kreativen Maltechniken gehören unter anderem Wisch-, Wickel-, Spachtel-, Tupf-, Lasur- und Schabloniertechniken. Vorbilder für die Wisch- und Lasurtechnik sind zum Beispiel abgewitterte und sonnengebleichte Hauswände mediterraner Länder.",
      "Es ist das Durchscheinen, die weichen Übergänge und das Übereinanderlegen verschiedener Farbschichten, was diese Maltechnik zu etwas Besonderem macht. Wir können von klassisch über modern bis ländlich jeden Stil umsetzen. Mit den traditionellen Handwerkstechniken und der Qualität moderner Produkte werden Ihren Gestaltungswünschen keine Grenzen gesetzt.",
    ],
  },
  {
    slug: "lackierarbeiten",
    title: "Lackierarbeiten vor Ort",
    teaser:
      "Nebelarme Spritzverfahren für Türen, Schränke, Heizungen, Tore und Zäune.",
    body: [
      "Mit modernsten nebelarmen Spritzverfahren oder konventionell mit Pinsel und Rolle können wir (fast) sämtliche Lackierarbeiten vor Ort ausführen – zum Beispiel Zimmertür, Schrank, Heizung, Tor oder Zaun.",
      "Die Auswahl der Lacke und Farben richtet sich nach Ihren persönlichen Ansprüchen oder den technischen Anforderungen, die an die Beschichtung gestellt werden. Größtes Augenmerk legen wir bei der Auswahl der Lacke auf den Umweltschutz, das heißt: lösemittel- und emissionsfreie Lacke werden von uns bevorzugt eingesetzt.",
    ],
  },
  {
    slug: "altbausanierung",
    title: "Altbausanierung und Schimmelbeseitigung",
    teaser:
      "Sanierungsarbeiten sowie Schadensbehebung bei Schimmel, Feuchte, Brand und Wasser.",
    body: [
      "Zu unseren Leistungen zählen auch Sanierungsarbeiten sowie die Schadensbehebung bei Schimmel und Feuchte, Brand- und Wasserschäden.",
    ],
  },
];
