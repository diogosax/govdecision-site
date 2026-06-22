import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { HomeView } from "@/views/HomeView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata("en-US", "/", {
  ...dict.home.meta,
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeView locale="en-US" dict={dict} />;
}
