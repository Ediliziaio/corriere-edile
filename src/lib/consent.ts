/**
 * Consenso cookie — store localStorage GDPR-style.
 *
 * Struttura pronta per l'integrazione reale (es. blocco script
 * analytics/marketing finché analytics/marketing === false).
 * Chiave: ce-cookie-consent. Evento custom per riaprire il pannello.
 */

export interface CookieConsent {
  necessary: true; // sempre attivi, non disattivabili
  analytics: boolean;
  marketing: boolean;
  /** versione della cookie policy accettata */
  policyVersion: string;
  /** ISO timestamp della scelta */
  timestamp: string;
}

export const CONSENT_KEY = "ce-cookie-consent";
export const POLICY_VERSION = "1.0-2026-07";
/** Evento window per riaprire il pannello preferenze (footer, cookie policy) */
export const REOPEN_CONSENT_EVENT = "ce:reopen-cookie-consent";

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(prefs: { analytics: boolean; marketing: boolean }): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
    policyVersion: POLICY_VERSION,
    timestamp: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    /* storage non disponibile: il banner verrà riproposto */
  }
  return consent;
}

/** Riapre il pannello preferenze da qualsiasi punto del sito. */
export function reopenCookiePreferences() {
  window.dispatchEvent(new CustomEvent(REOPEN_CONSENT_EVENT));
}
