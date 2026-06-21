"use client";

import { useEffect, useRef, useState } from "react";
import { languages } from "@/data/navigation";

/**
 * Language selector placeholder. EN is active; PT/ES are shown as disabled
 * "coming soon" entries so the header is ready for localization without
 * shipping machine-translated pages in this release.
 */
export function LanguageSelector({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = languages.find((l) => l.active) ?? languages[0];

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
        aria-label="Select language"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${triggerColor}`}
      >
        <span aria-hidden className="text-[0.95em]">
          {/* globe glyph */}
          &#127760;
        </span>
        {active.code}
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
          aria-label="Languages"
          className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-card"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.active}>
              <button
                type="button"
                disabled={!lang.active}
                onClick={() => setOpen(false)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  lang.active
                    ? "bg-surface font-semibold text-plum"
                    : "text-slate hover:bg-surface/60 disabled:cursor-not-allowed"
                }`}
              >
                <span>
                  <span className="font-semibold">{lang.code}</span>
                  <span className="ml-2 text-xs text-slate">{lang.label}</span>
                </span>
                {lang.active ? (
                  <span className="text-xs font-semibold text-coral">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-line/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-slate">
                    Soon
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
