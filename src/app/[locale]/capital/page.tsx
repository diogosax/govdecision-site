import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getPartnerCapital } from "@/i18n/partner-capital";
import { CapitalView } from "@/views/CapitalView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return pageMetadata(locale, "/capital", {
    ...getPartnerCapital(locale).capital.meta,
    absoluteTitle: true,
  });
}

export default async function LocaleCapitalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <CapitalView locale={locale} />;
}
