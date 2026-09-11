"use client";

import { useEffect } from "react";
import { salvaParametriCampagna } from "@/lib/eicLead";

/**
 * Salva UTM, gclid e fbclid all'atterraggio, così restano disponibili quando
 * il visitatore compila un form su un'altra pagina. Non disegna nulla.
 */
export default function SalvaCampagna() {
  useEffect(() => {
    salvaParametriCampagna();
  }, []);
  return null;
}
