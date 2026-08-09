/**
 * Shared shape of the contact form state.
 *
 * This lives outside `actions.ts` on purpose: a `"use server"` module may only
 * export async functions, so the plain initial-state object cannot live there.
 */
export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<
    Record<"name" | "email" | "phone" | "subject" | "message" | "consent", string>
  >;
  values: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", phone: "", subject: "", message: "" },
};
