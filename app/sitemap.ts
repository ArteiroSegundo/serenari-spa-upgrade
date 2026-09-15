import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * No `lastModified`: it would be the build timestamp, which marks every URL as
 * changed on each deploy and teaches crawlers to distrust the signal.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/terapias`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${SITE_URL}/terapias/${service.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/termos`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
