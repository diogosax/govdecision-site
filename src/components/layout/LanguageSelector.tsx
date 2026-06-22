"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, localeShort, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routing";
import { trackEvent, pageFromPathname } from "@/lib/analytics/events";
import { setLocalePreference } from "@/lib/locale-preference";

/**
 * Functional language selector.
 *
 * - Shows the current locale (short label) in a compact pill.
 * - Switches between EN / PT / ES, preserving the current route when a
 *   localized equivalent exists, and preserving query params (e.g. the
 *   contextual /contact?path=…&type=… links) on the way.
 * - For deep pages without a localized version yet, it falls back to the
 *   nearest localized route (handled by `switchLocalePath`).
 *
 * Query params are read from `window.location.search` at click time, so the
 * component never reads request-time data during render — no Suspense boundary
 * and no hydration mismatch.
 */
export function LanguageSelector({
  locale,
  label,
  current,
  tone = "dark",
}: {
  locale: Locale;
  label: string;
  current: string;
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function selectLocale(target: Locale) {
    setOpen(false);
    if (target === locale) return;
    // An explicit choice silences the browser-language suggestion banner.
    setLocalePreference("selected");
    const search = typeof window !== "undefined" ? window.location.search : "";
    const toPath = switchLocalePath(pathname, search, target);
    trackEvent("language_switched", {
      fromLocale: locale,
      toLocale: target,
      fromPath: pageFromPathname(pathname),
      toPath: pageFromPathname(toPath),
    });
    router.push(toPath);
  }

  const triggerColor =
    tone === "light"
      ? "text-white/80 hover:text-white border-white/20 hover:border-white/40"
      : "text-plum/70 hover:text-plum border-line hover:border-plum/30";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${triggerColor}`}
      >
        <span aria-hidden className="text-[0.95em]">
          {/* globe glyph */}
          &#127760;
        </span>
        {localeShort[locale]}
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="m3 4.5 3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-card"
        >
          {locales.map((code) => {
            const isCurrent = code === locale;
            return (
              <li key={code} role="option" aria-selected={isCurrent}>
                <button
                  type="button"
                  onClick={() => selectLocale(code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                    isCurrent
                      ? "bg-surface font-semibold text-plum"
                      : "text-slate hover:bg-surface/60"
                  }`}
                >
                  <span>
                    <span className="font-semibold">{localeShort[code]}</span>
                    <span className="ml-2 text-xs text-slate">
                      {localeNames[code]}
                    </span>
                  </span>
                  {isCurrent && (
                    <span className="text-xs font-semibold text-coral">
                      {current}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
