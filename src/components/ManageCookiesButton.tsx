"use client";

import { reopenCookiePreferences } from "@/lib/consent";

/** Bottone "Gestisci cookie" — riapre il pannello del consenso (evento custom). */
export default function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={reopenCookiePreferences}
      className="rounded-md bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
    >
      Gestisci cookie
    </button>
  );
}
