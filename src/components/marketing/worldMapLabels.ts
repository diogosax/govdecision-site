import type { Locale } from "@/i18n/config";

/**
 * Localized, compact labels for the corridors WorldMap (SITE-012), keyed by
 * corridor id. EN-US is intentionally absent so the map falls back to its
 * built-in English names/overrides (byte-for-byte unchanged). PT-BR / ES use
 * short forms chosen to avoid overflow on the abstract map.
 */
export const worldMapLabels: Partial<Record<Locale, Record<string, string[]>>> = {
  "pt-BR": {
    us: ["Estados Unidos"],
    brazil: ["Brasil"],
    paraguay: ["Paraguai"],
    mexico: ["México"],
    canada: ["Canadá"],
    africa: ["África selecionada"],
    multilateral: ["ONU / Banco Mundial"],
  },
  es: {
    us: ["Estados Unidos"],
    brazil: ["Brasil"],
    paraguay: ["Paraguay"],
    mexico: ["México"],
    canada: ["Canadá"],
    africa: ["África seleccionada"],
    multilateral: ["ONU / Banco Mundial"],
  },
};
