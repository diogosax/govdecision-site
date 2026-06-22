import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { ContactView } from "@/views/ContactView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return pageMetadata(locale, "/contact", getDictionary(locale).contact.meta);
}

export default async function LocaleContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const sp = await searchParams;
  return <ContactView locale={locale} dict={getDictionary(locale)} sp={sp} />;
}
