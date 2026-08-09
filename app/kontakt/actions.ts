"use server";

import {
  initialContactFormState,
  type ContactFormState,
} from "./form-state";

const read = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim();

// Deliberately permissive: enough to catch typos, not enough to reject valid
// but unusual addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    subject: read(formData, "subject"),
    message: read(formData, "message"),
  };
  const consent = formData.get("consent") === "on";

  // Honeypot: hidden from real users, irresistible to naive bots. Pretend the
  // submission worked so the bot does not retry.
  if (read(formData, "website") !== "") {
    return { ...initialContactFormState, status: "success", message: "Vielen Dank für Ihre Nachricht." };
  }

  const errors: ContactFormState["errors"] = {};
  if (values.name.length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (values.message.length < 10)
    errors.message = "Bitte beschreiben Sie Ihr Anliegen mit mindestens 10 Zeichen.";
  if (!consent)
    errors.consent = "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Bitte prüfen Sie die markierten Felder.",
      errors,
      values,
    };
  }

  // ---------------------------------------------------------------------------
  // TODO(Versand einrichten): Hier wird die Nachricht noch NICHT verschickt.
  // Als Versanddienstleister ist Resend gesetzt – so steht es auch in der
  // Datenschutzerklärung (Ziffer 5). Vor dem Livegang muss die Anbindung hier
  // erfolgen; der API-Key gehört in eine Umgebungsvariable, nicht in den
  // Quellcode.
  //
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: "website@example.de",
  //     to: site.email,
  //     replyTo: values.email,
  //     subject: `Kontaktanfrage: ${values.subject || "ohne Betreff"}`,
  //     text: `${values.name} (${values.email}, ${values.phone})\n\n${values.message}`,
  //   })
  //
  // Solange das fehlt, ist das Formular nur eine Attrappe – bitte Telefon und
  // E-Mail als verlässlichen Weg auf der Kontaktseite prominent lassen.
  // ---------------------------------------------------------------------------
  console.warn(
    "[kontaktformular] Kein Mailversand konfiguriert – Anfrage wurde nicht zugestellt:",
    { ...values, consent }
  );

  return {
    status: "success",
    message:
      "Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.",
    errors: {},
    values: initialContactFormState.values,
  };
}
