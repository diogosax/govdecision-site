import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";
import enUS from "./dictionaries/en-US";
import ptBR from "./dictionaries/pt-BR";
import es from "./dictionaries/es";

/**
 * Dictionaries are plain typed objects (no network, no async). They are read
 * from Server Components/views, which keep the marketing copy out of the client
 * bundle — only the specific strings a Client Component needs are passed down
 * as props.
 */
const dictionaries: Record<Locale, Dictionary> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries["en-US"];
}

export type { Dictionary };
