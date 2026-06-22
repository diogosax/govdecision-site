import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getPartnerCapital } from "@/i18n/partner-capital";
import { PartnersView } from "@/views/PartnersView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return pageMetadata(locale, "/partners", {
    ...getPartnerCapital(locale).partners.meta,
    absoluteTitle: true,
  });
}

export default async function LocalePartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <PartnersView locale={locale} />;
}
