import type { Locale } from "@/i18n/config";
import type { PartnerCapitalChrome } from "./types";
import enUS from "./en-US";
import ptBR from "./pt-BR";
import es from "./es";

/**
 * Localized chrome for the Partner Network + GovDecision Capital pages
 * (SITE-015). Plain typed objects, read from server components — no async, no
 * client bundle cost. EN-US is the source of truth; PT-BR and ES mirror it.
 */
const chrome: Record<Locale, PartnerCapitalChrome> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  es,
};

export function getPartnerCapital(locale: Locale): PartnerCapitalChrome {
  return chrome[locale] ?? chrome["en-US"];
}

export type {
  PartnerCapitalChrome,
  PartnersCopy,
  CapitalCopy,
  PartnerCapitalPromoCopy,
} from "./types";
