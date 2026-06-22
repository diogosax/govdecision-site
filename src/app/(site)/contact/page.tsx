import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { ContactView } from "@/views/ContactView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata(
  "en-US",
  "/contact",
  dict.contact.meta,
);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  return <ContactView locale="en-US" dict={dict} sp={sp} />;
}
