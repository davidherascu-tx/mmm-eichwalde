"use client";

import Link from "next/link";
import { useActionState, useId } from "react";
import { submitContactForm } from "../kontakt/actions";
import { initialContactFormState } from "../kontakt/form-state";

export function ContactForm() {
  const [state, action, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const formId = useId();

  const fieldId = (name: string) => `${formId}-${name}`;
  const errorId = (name: string) => `${formId}-${name}-error`;

  if (state.status === "success") {
    return (
      <div className="border border-stone-300 bg-stone-50 p-8">
        <h2 className="font-display text-2xl font-bold text-stone-900">
          Nachricht abgeschickt
        </h2>
        <p className="mt-3 leading-relaxed text-stone-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      {state.status === "error" && (
        <p
          role="alert"
          className="border border-signal-300 bg-signal-50 px-4 py-3 text-sm font-bold text-signal-700"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId("name")}
          errorId={errorId("name")}
          name="name"
          label="Name"
          required
          autoComplete="name"
          defaultValue={state.values.name}
          error={state.errors.name}
        />
        <Field
          id={fieldId("email")}
          errorId={errorId("email")}
          name="email"
          type="email"
          label="E-Mail"
          required
          autoComplete="email"
          defaultValue={state.values.email}
          error={state.errors.email}
        />
        <Field
          id={fieldId("phone")}
          errorId={errorId("phone")}
          name="phone"
          type="tel"
          label="Telefon"
          autoComplete="tel"
          defaultValue={state.values.phone}
          error={state.errors.phone}
        />
        <Field
          id={fieldId("subject")}
          errorId={errorId("subject")}
          name="subject"
          label="Betreff"
          defaultValue={state.values.subject}
          error={state.errors.subject}
        />
      </div>

      <div>
        <label
          htmlFor={fieldId("message")}
          className="block text-sm font-bold text-stone-900"
        >
          Ihr Anliegen <Required />
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={6}
          required
          defaultValue={state.values.message}
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={state.errors.message ? errorId("message") : undefined}
          className={inputClass(Boolean(state.errors.message))}
          placeholder="Beschreiben Sie kurz, was gemacht werden soll – Räume, Flächen, Wunschtermin."
        />
        <FieldError id={errorId("message")} message={state.errors.message} />
      </div>

      {/* Honeypot — hidden from users, harvested by bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor={fieldId("website")}>Website</label>
        <input
          id={fieldId("website")}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={Boolean(state.errors.consent)}
            aria-describedby={
              state.errors.consent ? errorId("consent") : undefined
            }
            className="mt-1 h-4 w-4 shrink-0 rounded border-stone-300 accent-brand-600"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-bold text-signal-600 underline underline-offset-2">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
            meiner Anfrage zu. <Required />
          </span>
        </label>
        <FieldError id={errorId("consent")} message={state.errors.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-stone-300 sm:w-auto"
      >
        {pending ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      <p className="text-sm text-stone-500">
        Felder mit <Required /> sind Pflichtfelder.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `mt-2 w-full border bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 ${
    hasError ? "border-signal-500" : "border-stone-300"
  }`;
}

function Required() {
  return (
    <span className="text-signal-600" aria-label="Pflichtfeld">
      *
    </span>
  );
}

function Field({
  id,
  errorId,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  defaultValue,
  error,
}: {
  id: string;
  errorId: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-stone-900">
        {label} {required && <Required />}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass(Boolean(error))}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-bold text-signal-600">
      {message}
    </p>
  );
}
