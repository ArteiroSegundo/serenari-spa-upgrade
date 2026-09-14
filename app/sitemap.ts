import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/terapias`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${SITE_URL}/terapias/${service.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
