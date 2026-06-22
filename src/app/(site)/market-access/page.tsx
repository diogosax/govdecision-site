import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { MarketAccessView } from "@/views/MarketAccessView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata("en-US", "/market-access", {
  ...dict.marketAccess.meta,
  absoluteTitle: true,
});

export default function MarketAccessPage() {
  return <MarketAccessView locale="en-US" dict={dict} />;
}
