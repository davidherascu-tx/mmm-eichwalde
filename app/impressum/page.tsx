import type { Metadata } from "next";
import { Container } from "../components/container";
import { PageHeader } from "../components/page-header";
import { site } from "../lib/site";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung des Malerbetriebs Lars Meyer aus Eichwalde.",
  path: "/impressum",
  noindex: true,
});

export default function Impressum() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Impressum", href: "/impressum" }]}
        eyebrow="Rechtliches"
        title="Impressum"
      />

      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="rich-text">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              {site.legalName}
              <br />
              {site.jobTitle}
              <br />
              {site.street}
              <br />
              {site.postalCode} {site.city}
              <br />
              {site.region}, Bundesrepublik {site.country}
            </p>

            <h2>Vertreten durch</h2>
            <p>{site.owner}</p>

            <h2>Kontakt</h2>
            <p>
              Mobilfunk: <a href={site.phoneHref}>{site.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <h2>Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              {site.vatId}
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              <strong>Berufsbezeichnung:</strong> {site.jobTitle}
              <br />
              <strong>Verliehen in:</strong> Bundesrepublik Deutschland
            </p>
            <p>
              <strong>Zuständige Kammer:</strong> Handwerkskammer Cottbus,
              Altmarkt 17, 03046 Cottbus (
              <a
                href="https://www.hwk-cottbus.de"
                target="_blank"
                rel="noreferrer noopener"
              >
                hwk-cottbus.de
              </a>
              ) – zuständig für den Landkreis Dahme-Spreewald und damit für die
              Eintragung in die Handwerksrolle.
            </p>
            <p>
              <strong>Registergericht:</strong> Amtsgericht Cottbus
            </p>
            <p>
              <strong>Es gelten folgende berufsrechtliche Regelungen:</strong>{" "}
              Handwerksordnung (HwO). Die Regelungen können eingesehen werden
              unter{" "}
              <a
                href="https://www.gesetze-im-internet.de/hwo/"
                target="_blank"
                rel="noreferrer noopener"
              >
                gesetze-im-internet.de/hwo
              </a>
              .
            </p>

            <h2>Redaktionell verantwortlich</h2>
            <p>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              <br />
              {site.owner}, {site.street}, {site.postalCode} {site.city}
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft; rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
              wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <h2>Bildnachweise</h2>
            <p>
              Die Fotos der ausgeführten Arbeiten sowie die Abbildungen der
              Zertifikate stammen aus dem Bestand des Betriebs. Die Bildrechte
              liegen bei {site.owner}.
            </p>
            <p>
              Quellenangaben für die verwendeten Logos und Grafiken Dritter:
            </p>
            <ul>
              <li>
                Brillux GmbH &amp; Co. KG –{" "}
                <a
                  href="https://www.brillux.de"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  www.brillux.de
                </a>
              </li>
              <li>
                Landesinnungsverband des Maler- und Lackiererhandwerks
                Berlin-Brandenburg –{" "}
                <a
                  href="https://www.farbe-bb.de"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  www.farbe-bb.de
                </a>{" "}
                (vormals malerverband-bb.de)
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
