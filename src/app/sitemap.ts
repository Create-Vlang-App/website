import type { MetadataRoute } from 'next';
import { getTemplatesData } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { templates, extensions, categories } = await getTemplatesData();

  const staticRoutes: MetadataRoute.Sitemap = ['', '/templates', '/extensions', '/docs'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const templateRoutes: MetadataRoute.Sitemap = templates.map((t) => ({
    url: `${SITE_URL}/templates/${t.slug}`,
    lastModified: new Date(),
  }));

  const extensionRoutes: MetadataRoute.Sitemap = extensions.map((e) => ({
    url: `${SITE_URL}/extensions/${e.slug}`,
    lastModified: new Date(),
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/templates?category=${encodeURIComponent(c.slug)}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...templateRoutes, ...extensionRoutes, ...categoryRoutes];
}
