"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { inviaLead } from "@/lib/eicLead";
import { EIC_FORM_ID } from "@/lib/site";

/**
 * Form contatti.
 * Il sito e' un export statico: l'invio va al CRM di Edilizia in Cloud, che
 * crea il contatto con la campagna di provenienza (UTM, gclid, fbclid).
 * La conferma compare solo quando il CRM ha accettato; se l'invio fallisce il
 * form resta com'e', con i dati gia' scritti, e si puo' riprovare.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (invio) return;
    const fd = new FormData(e.currentTarget);
    const campo = (k: string) => String(fd.get(k) ?? "").trim();
    setInvio(true);
    setErrore(false);
    try {
      await inviaLead(EIC_FORM_ID, {
        nome: campo("nome"),
        email: campo("email"),
        azienda: campo("azienda"),
        messaggio: campo("messaggio"),
        tipo: "contatto",
      });
      setSent(true);
    } catch {
      setErrore(true);
    } finally {
      setInvio(false);
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="mt-4 flex items-start gap-3 rounded-lg border border-gold-500 bg-gold-50 p-5"
      >
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
        <div>
          <p className="font-serif text-lg font-bold text-navy-800">Messaggio inviato!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Grazie per averci scritto. La redazione ti risponderà entro 2 giorni lavorativi.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="mt-4 space-y-4"
      aria-label="Modulo di contatto"
      aria-busy={invio}
      onSubmit={onSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-nome" className="mb-1 block text-sm font-semibold text-navy-800">
            Nome e cognome *
          </label>
          <input
            id="ct-nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className="mb-1 block text-sm font-semibold text-navy-800">
            Email *
          </label>
          <input
            id="ct-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
          />
        </div>
      </div>
      <div>
        <label htmlFor="ct-azienda" className="mb-1 block text-sm font-semibold text-navy-800">
          Ragione sociale <span className="font-normal text-muted-foreground">(facoltativo)</span>
        </label>
        <input
          id="ct-azienda"
          name="azienda"
          type="text"
          autoComplete="organization"
          className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>
      <div>
        <label htmlFor="ct-msg" className="mb-1 block text-sm font-semibold text-navy-800">
          Messaggio *
        </label>
        <textarea
          id="ct-msg"
          name="messaggio"
          required
          rows={6}
          className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="ct-privacy"
          type="checkbox"
          required
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border accent-navy focus:ring-gold-500"
        />
        <label htmlFor="ct-privacy" className="text-sm leading-relaxed text-muted-foreground">
          Ho letto la{" "}
          <Link href="/privacy-policy" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            Privacy Policy
          </Link>{" "}
          e acconsento al trattamento dei miei dati per la risposta alla richiesta. *
        </label>
      </div>
      {errore && (
        <p role="alert" className="text-sm font-semibold text-destructive">
          Invio non riuscito. Riprova tra poco.
        </p>
      )}
      <button
        type="submit"
        disabled={invio}
        className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900 hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" /> {invio ? "Invio in corso…" : "Invia messaggio"}
      </button>
    </form>
  );
}
