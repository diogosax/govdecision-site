import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { HomeView } from "@/views/HomeView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/", { ...dict.home.meta, absoluteTitle: true });
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <HomeView locale={locale} dict={getDictionary(locale)} />;
}
