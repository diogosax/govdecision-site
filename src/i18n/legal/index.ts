import type { Locale } from "@/i18n/config";
import type { LegalChrome } from "./types";
import enUS from "./en-US";
import ptBR from "./pt-BR";
import es from "./es";

/**
 * Localized copy for the public legal / compliance pages (SITE-018): Terms of
 * Use, Privacy Notice, and Compliance. Plain typed objects read from server
 * components — no async, no client bundle cost. EN-US is the source of truth;
 * PT-BR and ES mirror it with natural, careful translations.
 */
const chrome: Record<Locale, LegalChrome> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  es,
};

export function getLegal(locale: Locale): LegalChrome {
  return chrome[locale] ?? chrome["en-US"];
}

export type { LegalChrome, LegalDoc, LegalSection, LegalKind } from "./types";
