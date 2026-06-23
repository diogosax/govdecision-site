import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getLegal } from "@/i18n/legal";
import { LegalView } from "@/views/LegalView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return pageMetadata(locale, "/terms", {
    ...getLegal(locale).terms.meta,
    absoluteTitle: true,
  });
}

export default async function LocaleTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <LegalView locale={locale} kind="terms" />;
}
