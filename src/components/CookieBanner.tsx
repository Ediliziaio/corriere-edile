"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import {
  getConsent,
  saveConsent,
  reopenCookiePreferences,
  REOPEN_CONSENT_EVENT,
  TRACKING_ATTIVO,
} from "@/lib/consent";

/**
 * CookieBanner GDPR — bottom sheet globale.
 * - Prima visita (nessun consenso salvato): appare il banner.
 * - Accetta tutti / Rifiuta / Personalizza con toggle per categoria.
 * - Scelta persistita in localStorage con timestamp + versione policy:
 *   non riappare né alle navigazioni né al cambio route.
 * - Riapertura manuale via evento custom ("Gestisci cookie" in footer/policy).
 * - Chiusura solo tramite azioni esplicite (accessibilità).
 */

interface ToggleProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}

function ConsentToggle({ label, description, checked, disabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-white p-4">
      <div>
        <p className="text-sm font-bold text-navy-800">{label}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
          checked ? "bg-gold-500" : "bg-navy-200"
        } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieBanner() {
  // Nessuno strumento soggetto a consenso: niente banner. Vedi TRACKING_ATTIVO.
  if (!TRACKING_ATTIVO) return null;

  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Prima visita: mostra se il consenso non è salvato. Ascolta la riapertura manuale.
  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const reopen = () => {
      const c = getConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const close = (prefs: { analytics: boolean; marketing: boolean }) => {
    saveConsent(prefs);
    setVisible(false);
    setCustomizing(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-navy-800 bg-navy-900 text-white shadow-2xl">
        {!customizing ? (
          /* ===== Vista banner compatto ===== */
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-gold-500" aria-hidden="true" />
              <div>
                <p className="font-serif text-lg font-bold">Questo sito usa i cookie</p>
                <p className="mt-1 text-sm leading-relaxed text-navy-100">
                  Usiamo cookie tecnici necessari al funzionamento e, con il tuo consenso, cookie
                  analitici e di marketing per migliorare contenuti e pubblicità. Leggi la{" "}
                  <Link href="/cookie-policy" className="font-semibold text-gold-500 underline hover:text-gold-600">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="rounded-md border border-navy-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Personalizza
              </button>
              <button
                type="button"
                onClick={() => close({ analytics: false, marketing: false })}
                className="rounded-md border border-navy-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => close({ analytics: true, marketing: true })}
                className="rounded-md bg-gold-500 px-4 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Accetta tutti
              </button>
            </div>
          </div>
        ) : (
          /* ===== Pannello preferenze ===== */
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 font-serif text-lg font-bold">
                <Cookie className="h-5 w-5 text-gold-500" aria-hidden="true" /> Preferenze cookie
              </p>
              <button
                type="button"
                aria-label="Torna al banner"
                onClick={() => setCustomizing(false)}
                className="rounded-full p-1.5 text-navy-100 hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <ConsentToggle
                label="Necessari"
                description="Cookie tecnici indispensabili: preferenze consenso, sicurezza, funzionamento del sito. Sempre attivi."
                checked={true}
                disabled
                onChange={() => {}}
              />
              <ConsentToggle
                label="Analitici"
                description="Statistiche di utilizzo aggregate e anonime (es. Google Analytics) per migliorare i contenuti."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ConsentToggle
                label="Marketing e pubblicità"
                description="Personalizzazione degli annunci negli slot pubblicitari e misurazione delle campagne."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => close({ analytics: false, marketing: false })}
                className="rounded-md border border-navy-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Rifiuta tutti
              </button>
              <button
                type="button"
                onClick={() => close({ analytics, marketing })}
                className="rounded-md bg-gold-500 px-4 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Salva preferenze
              </button>
            </div>
            <p className="mt-3 text-[11px] text-navy-200">
              Puoi modificare la scelta in qualsiasi momento dal link "Gestisci cookie" nel footer o
              dalla{" "}
              <button
                type="button"
                onClick={reopenCookiePreferences}
                className="underline hover:text-gold-500"
              >
                Cookie Policy
              </button>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
