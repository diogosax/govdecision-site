import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFoundCopy } from "@/i18n/not-found";

/**
 * Global 404 for URLs that match no route at all (e.g. an unknown top-level
 * path or an invalid locale prefix). Required because the app has multiple root
 * layouts and therefore no single layout to compose a root `not-found` from.
 *
 * It bypasses the normal layout tree, so it imports global styles + fonts and
 * renders the GovDecision chrome itself. EN-US (x-default) — localized in-tree
 * 404s are handled by the per-segment `not-found.tsx` boundaries.
 */
export const metadata: Metadata = {
  title: `${notFoundCopy["en-US"].title} · GovDecision`,
};

export default function GlobalNotFound() {
  return (
    <html lang="en-US" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <SiteChrome locale="en-US" dict={getDictionary("en-US")}>
          <NotFoundView locale="en-US" />
        </SiteChrome>
      </body>
    </html>
  );
}
