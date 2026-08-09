import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../components/container";
import { PageHeader } from "../components/page-header";
import { site } from "../lib/site";
import { seitenMetadata } from "../lib/seo";

export const metadata: Metadata = seitenMetadata({
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf der Website des Malerbetriebs Lars Meyer.",
  path: "/datenschutz",
  noindex: true,
});

export default function Datenschutz() {
  return (
    <>
      <PageHeader
        krumen={[{ name: "Datenschutz", href: "/datenschutz" }]}
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
      />

      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="rich-text">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im
              Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              {site.legalName}
              <br />
              {site.owner}
              <br />
              {site.street}
              <br />
              {site.postalCode} {site.city}
              <br />
              Telefon: <a href={site.phoneHref}>{site.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              Ein Datenschutzbeauftragter ist nicht bestellt. Die
              Voraussetzungen des Art. 37 DSGVO und des § 38 BDSG liegen bei
              uns nicht vor – in unserem Betrieb sind nicht mindestens 20
              Personen ständig mit der automatisierten Verarbeitung
              personenbezogener Daten beschäftigt. Ansprechpartner für alle
              Fragen zum Datenschutz ist {site.owner} unter den oben genannten
              Kontaktdaten.
            </p>

            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
              behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung. Die Nutzung dieser Website ist in der Regel
              ohne Angabe personenbezogener Daten möglich. Soweit Sie uns Daten
              übermitteln, geschieht dies stets freiwillig.
            </p>

            <h2>3. Hosting</h2>
            <p>
              Diese Website wird von Netlify ausgeliefert:
              <br />
              Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA
            </p>
            <p>
              Alle personenbezogenen Daten, die beim Aufruf dieser Website
              anfallen – insbesondere die unter Ziffer 4 genannten Zugriffsdaten
              sowie die über das Kontaktformular übermittelten Angaben –, werden
              auf der Infrastruktur von Netlify verarbeitet.
            </p>
            <p>
              Der Quellcode dieser Website wird bei GitHub, Inc., 88 Colin P.
              Kelly Jr. Street, San Francisco, CA 94107, USA (Unternehmen der
              Microsoft Corporation) verwaltet; von dort wird die Website
              automatisiert gebaut und an Netlify übergeben. Die Auslieferung
              der Website an Ihren Browser erfolgt ausschließlich über Netlify;
              beim Besuch der Website werden keine Daten an GitHub übermittelt.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
              schnellen und effizienten Bereitstellung unseres Onlineangebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              Mit dem Anbieter haben wir einen Vertrag über die
              Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.
            </p>
            <p>
              <strong>Datenübermittlung in die USA:</strong> Netlify verarbeitet
              Daten auch auf Servern in den USA. Netlify, Inc. ist nach dem
              EU-U.S. Data Privacy Framework zertifiziert, für das die
              EU-Kommission mit Beschluss vom 10. Juli 2023 ein angemessenes
              Datenschutzniveau festgestellt hat. Ergänzend stützt sich die
              Übermittlung auf die Standardvertragsklauseln der EU-Kommission
              (Durchführungsbeschluss (EU) 2021/914).
            </p>

            <h2>4. Server-Log-Dateien</h2>
            <p>
              Der Hoster dieser Seiten (siehe Ziffer 3) erhebt und speichert
              automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
              technisch fehlerfreien Darstellung und der Sicherheit unserer
              Website – hierfür müssen die Server-Log-Files erfasst werden.
            </p>

            <h2>5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
              sofern diese abgefragt wurde. Eine erteilte Einwilligung können
              Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Pflichtangaben im Formular sind Name, E-Mail-Adresse und Ihre
              Nachricht. Ohne diese Angaben können wir Ihre Anfrage nicht
              beantworten. Weitere Angaben sind freiwillig.
            </p>
            <p>
              Die Übermittlung des Formulars wird auf der Infrastruktur unseres
              Hosters verarbeitet (siehe Ziffer 3). Für die Zustellung der
              Nachricht an unser E-Mail-Postfach setzen wir den
              Versanddienstleister Resend ein:
              <br />
              Plus Five Five, Inc. („Resend“), 2261 Market Street #5039, San
              Francisco, CA 94114, USA
            </p>
            <p>
              Resend verarbeitet die von Ihnen übermittelten Angaben
              ausschließlich weisungsgebunden zum Transport der E-Mail. Grundlage
              ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO, der die
              Standardvertragsklauseln der EU-Kommission für die Übermittlung in
              die USA einbezieht.
            </p>

            <h2>6. Anfrage per E-Mail oder Telefon</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns
              gespeichert und verarbeitet. Es gelten die unter Ziffer 5
              genannten Rechtsgrundlagen.
            </p>

            <h2>7. Speicherdauer</h2>
            <p>
              Die von Ihnen im Kontaktformular oder per E-Mail übermittelten
              Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
              die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
              insbesondere handels- und steuerrechtliche Aufbewahrungsfristen –
              bleiben unberührt.
            </p>

            <h2>8. Keine Cookies, kein Tracking</h2>
            <p>
              Diese Website setzt keine Cookies zu Analyse-, Marketing- oder
              Trackingzwecken ein. Es werden keine Webanalysedienste,
              Social-Media-Plugins oder Werbenetzwerke eingebunden. Ein
              Cookie-Banner ist daher nicht erforderlich.
            </p>
            {/* Diese Aussage gilt nur, solange keine weiteren Dienste
                (Analyse-Tools, eingebettete Karten, Chat-Widgets, Netlify
                Split Testing) hinzukommen. Bei jeder Erweiterung muss dieser
                Abschnitt neu bewertet werden. */}

            <h2>9. Schriftarten</h2>
            <p>
              Diese Website verwendet Schriftarten, die lokal auf dem Server
              dieser Website gespeichert und von dort ausgeliefert werden. Beim
              Aufruf der Seiten wird <strong>keine</strong> Verbindung zu
              Servern von Google oder anderen Drittanbietern aufgebaut. Es
              werden dabei keine Daten an Dritte übertragen.
            </p>

            <h2>10. Externe Links</h2>
            <p>
              Auf unserer Kontaktseite verlinken wir auf einen externen
              Kartendienst (OpenStreetMap). Der Kartendienst wird bewusst
              <strong> nicht</strong> direkt in unsere Seite eingebettet. Erst
              wenn Sie den Link aktiv anklicken, werden Sie auf die Seite des
              Anbieters weitergeleitet und es können Daten – insbesondere Ihre
              IP-Adresse – an diesen übertragen werden. Für die Verarbeitung
              durch den Anbieter gilt dessen Datenschutzerklärung.
            </p>

            <h2>11. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt. Bei aktivierter Verschlüsselung können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>

            <h2>12. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>
                <strong>Auskunft</strong> über die zu Ihrer Person gespeicherten
                Daten und deren Verarbeitung (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> Ihrer bei uns gespeicherten Daten
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung, sofern
                diese auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Widerruf einer erteilten Einwilligung</strong> mit
                Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
              </li>
            </ul>
            <p>
              Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an die
              oben genannten Kontaktdaten.
            </p>

            <h2>13. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht Ihnen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem
              Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes. Für uns zuständig ist:
            </p>
            <p>
              Die Landesbeauftragte für den Datenschutz und für das Recht auf
              Akteneinsicht Brandenburg
              <br />
              Stahnsdorfer Damm 77
              <br />
              14532 Kleinmachnow
              <br />
              Telefon: 033203 356-0
              <br />
              E-Mail:{" "}
              <a href="mailto:poststelle@lda.brandenburg.de">
                poststelle@lda.brandenburg.de
              </a>
              <br />
              <a
                href="https://www.lda.brandenburg.de"
                target="_blank"
                rel="noreferrer noopener"
              >
                www.lda.brandenburg.de
              </a>
            </p>

            <h2>14. Aktualität dieser Erklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten
              Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <p>
              Fragen zum Datenschutz beantworten wir Ihnen gern – am einfachsten
              über unser <Link href="/kontakt">Kontaktformular</Link> oder
              telefonisch.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
