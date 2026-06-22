import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { MarketAccessView } from "@/views/MarketAccessView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return pageMetadata(locale, "/market-access", {
    ...getDictionary(locale).marketAccess.meta,
    absoluteTitle: true,
  });
}

export default async function LocaleMarketAccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <MarketAccessView locale={locale} dict={getDictionary(locale)} />;
}
