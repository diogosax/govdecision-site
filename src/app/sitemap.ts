import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/platform",
  "/market-access",
  "/corridors",
  "/pricing",
  "/company",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
