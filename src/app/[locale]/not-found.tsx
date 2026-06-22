"use client";

import { usePathname } from "next/navigation";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { getLocaleFromPathname } from "@/i18n/routing";

/**
 * Branded localized 404. Rendered inside the `[locale]` root layout, so it
 * keeps the GovDecision header/footer chrome and the correct `<html lang>`.
 *
 * `not-found` boundaries receive no params, so the locale is read from the URL
 * on the client (e.g. `/pt-BR/unknown` → pt-BR). This catches `notFound()` in
 * the localized tree and unmatched localized sub-paths.
 */
export default function LocaleNotFound() {
  const pathname = usePathname();
  return <NotFoundView locale={getLocaleFromPathname(pathname)} />;
}
