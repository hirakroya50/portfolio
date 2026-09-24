import type { MetadataRoute } from "next";

import { getAllProjectSlugs, getProfile } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const profile = getProfile();
  const baseUrl = profile.portfolio;

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
