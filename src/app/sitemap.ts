import { MetadataRoute } from "next";

import { DATA } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = DATA.url;

  // Note: External RSS blog posts are not included in sitemap
  // as they have their own canonical URLs and should be indexed from their source.
  // Only include local blog pages in sitemap.

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    // Chinese (default)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // English
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return staticRoutes;
}
