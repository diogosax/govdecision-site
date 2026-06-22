import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { PlatformView } from "@/views/PlatformView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata(
  "en-US",
  "/platform",
  dict.platform.meta,
);

export default function PlatformPage() {
  return <PlatformView locale="en-US" dict={dict} />;
}
