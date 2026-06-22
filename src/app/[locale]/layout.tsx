import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { montserrat } from "../fonts";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { getDictionary } from "@/i18n/get-dictionary";
import { rootMetadata } from "@/i18n/metadata";
import { isPrefixedLocale, localeHtmlLang } from "@/i18n/config";

/**
 * Localized root layout for the prefixed locales (pt-BR, es). EN-US is served
 * from the `(site)` route group at the root, so it is intentionally NOT a valid
 * `[locale]` value here — anything other than pt-BR/es 404s (clean fallback).
 */
/**
 * Only pt-BR and es are valid locale segments; any other prefix 404s cleanly via
 * the branded global 404 (this app has multiple root layouts, so a root-level
 * unmatched URL is served by `app/global-not-found`).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt-BR" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return rootMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();

  const dict = getDictionary(locale);
  return (
    <html lang={localeHtmlLang[locale]} className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <SiteChrome locale={locale} dict={dict}>
          {children}
        </SiteChrome>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
