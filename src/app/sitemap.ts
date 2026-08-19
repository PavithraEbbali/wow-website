import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { legalNav } from "@/lib/legalDocs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = "2026-07-08";

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...legalNav.map((l) => ({
      url: `${base}/legal/${l.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
