import type { Metadata } from "next";
import { Container } from "../components/container";
import { PageHeader } from "../components/page-header";
import { Platzhalter, RechtsHinweis } from "../components/platzhalter";
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
          <RechtsHinweis />

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
              Umsatzsteuergesetz:{" "}
              <Platzhalter>USt-IdNr. eintragen</Platzhalter>
            </p>
            <p>
              Alternativ, falls keine USt-IdNr. vorliegt:{" "}
              <Platzhalter>
                Steuernummer eintragen oder diesen Abschnitt durch den Hinweis
                auf die Kleinunternehmerregelung nach § 19 UStG ersetzen
              </Platzhalter>
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              <strong>Berufsbezeichnung:</strong> {site.jobTitle}
              <br />
              <strong>Verliehen in:</strong> Bundesrepublik Deutschland
            </p>
            <p>
              <strong>Zuständige Kammer:</strong>{" "}
              <Platzhalter>
                zuständige Handwerkskammer und deren Anschrift eintragen – für
                den Landkreis Dahme-Spreewald in der Regel die Handwerkskammer
                Cottbus; bitte vor Veröffentlichung bestätigen
              </Platzhalter>
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

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p>
              <Platzhalter>
                Bitte prüfen, ob diese Aussage gewünscht ist – eine Teilnahme
                kann freiwillig erklärt werden. Ebenfalls prüfen, ob zum
                Zeitpunkt der Veröffentlichung noch ein Hinweis auf eine
                EU-Streitbeilegungsplattform erforderlich ist.
              </Platzhalter>
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
              Alle Fotos auf dieser Website zeigen von uns ausgeführte Arbeiten
              und wurden von uns selbst aufgenommen.{" "}
              <Platzhalter>
                Bitte bestätigen. Falls einzelne Aufnahmen von Dritten stammen
                oder Personen erkennbar sind, hier Urheber und Einwilligungen
                ergänzen.
              </Platzhalter>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
