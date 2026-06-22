"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, isPrefixedLocale, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routing";
import { trackEvent, pageFromPathname } from "@/lib/analytics/events";
import {
  hasLocalePreference,
  setLocalePreference,
} from "@/lib/locale-preference";

/**
 * Non-invasive browser-language suggestion banner (SITE-012).
 *
 * Shows ONLY on the EN-US (root) site, and only when `navigator.languages`
 * strongly suggests Portuguese or Spanish. It never redirects automatically —
 * it offers a one-click switch (which preserves the current route + query) and
 * a dismiss. Any choice (accept / dismiss / explicit language switch) is
 * remembered in localStorage, so the banner never nags. Client-only: it reads
 * `navigator` after mount, so there is no SSR/hydration mismatch.
 */

// Fixed English copy — the banner only ever renders on the EN-US site.
const COPY: Record<"pt-BR" | "es", { message: string; accept: string }> = {
  "pt-BR": {
    message: "Prefer viewing GovDecision in Portuguese?",
    accept: "View in Portuguese",
  },
  es: {
    message: "Prefer viewing GovDecision in Spanish?",
    accept: "View in Spanish",
  },
};
const KEEP_ENGLISH = "Keep English";

/** First browser language that maps to a supported prefixed locale, if any. */
function detectSuggestion(): "pt-BR" | "es" | null {
  const langs =
    typeof navigator !== "undefined"
      ? navigator.languages ?? [navigator.language]
      : [];
  for (const raw of langs) {
    const lang = (raw ?? "").toLowerCase();
    if (lang.startsWith("pt")) return "pt-BR";
    if (lang.startsWith("es")) return "es";
  }
  return null;
}

export function LocaleSuggestionBanner({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [suggestion, setSuggestion] = useState<"pt-BR" | "es" | null>(null);

  useEffect(() => {
    // Only on the default (EN-US) site, and never on an already-localized path.
    if (locale !== defaultLocale) return;
    const firstSegment = pathname.split("/")[1] ?? "";
    if (isPrefixedLocale(firstSegment)) return;
    if (hasLocalePreference()) return;

    const detected = detectSuggestion();
    if (!detected) return;

    // Revealing the banner after a post-mount read of `navigator` is the whole
    // point of this effect (it avoids any SSR/hydration mismatch), so the
    // one-shot setState here is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSuggestion(detected);
    trackEvent("locale_suggestion_shown", {
      currentLocale: defaultLocale,
      suggestedLocale: detected,
      page: pageFromPathname(pathname),
    });
    // Intentionally runs once on mount for the active path.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!suggestion) return null;

  const copy = COPY[suggestion];

  const accept = () => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    const target = switchLocalePath(pathname, search, suggestion);
    setLocalePreference("accepted");
    trackEvent("locale_suggestion_accepted", {
      currentLocale: defaultLocale,
      suggestedLocale: suggestion,
      page: pageFromPathname(pathname),
    });
    setSuggestion(null);
    router.push(target);
  };

  const dismiss = () => {
    setLocalePreference("dismissed");
    trackEvent("locale_suggestion_dismissed", {
      currentLocale: defaultLocale,
      suggestedLocale: suggestion,
      page: pageFromPathname(pathname),
    });
    setSuggestion(null);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[90] sm:inset-x-auto sm:right-5 sm:max-w-md">
      <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white/95 p-4 shadow-card backdrop-blur sm:flex-row sm:items-center sm:gap-4">
        <p className="flex-1 text-sm font-medium text-plum">
          <span aria-hidden className="mr-2 text-[0.95em]">
            {/* globe glyph */}
            &#127760;
          </span>
          {copy.message}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-coral px-3.5 py-1.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-coral-600"
          >
            {copy.accept}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold text-plum/70 transition-colors hover:text-plum"
          >
            {KEEP_ENGLISH}
          </button>
        </div>
      </div>
    </div>
  );
}
