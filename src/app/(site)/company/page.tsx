import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { CompanyView } from "@/views/CompanyView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata(
  "en-US",
  "/company",
  dict.company.meta,
);

export default function CompanyPage() {
  return <CompanyView locale="en-US" dict={dict} />;
}
