import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { PricingView } from "@/views/PricingView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata(
  "en-US",
  "/pricing",
  dict.pricing.meta,
);

export default function PricingPage() {
  return <PricingView locale="en-US" dict={dict} />;
}
