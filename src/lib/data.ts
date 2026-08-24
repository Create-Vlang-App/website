import { getFallbackData } from './mock-data';
import { type TemplatesData, templatesDataSchema } from './schemas';

const TEMPLATES_URL = 'https://raw.githubusercontent.com/Create-Vlang-App/cva-templates/main/templates.json';

/** Catalog counts for footer / stats bar — single source of truth. */
export type CatalogStats = {
  templates: number;
  extensions: number;
  categories: number;
};

export function catalogStatsFrom(data: TemplatesData): CatalogStats {
  return {
    templates: data.templates.length,
    extensions: data.extensions.length,
    categories: data.categories.length,
  };
}

/** Upstream catalog still ships `addons`; site schema uses `extensions`. */
export function normalizeCatalogPayload(raw: unknown): unknown {
  if (!raw || typeof raw !== 'object') return raw;
  const record = raw as Record<string, unknown>;
  if (record.extensions == null && Array.isArray(record.addons)) {
    const { addons, ...rest } = record;
    return { ...rest, extensions: addons };
  }
  return raw;
}

export async function getTemplatesData(): Promise<TemplatesData> {
  try {
    const response = await fetch(TEMPLATES_URL, { next: { revalidate: 3600 } }); // Revalidate every hour

    if (!response.ok) {
      throw new Error(`Failed to fetch templates: ${response.status}`);
    }

    const rawData = normalizeCatalogPayload(await response.json());

    // Validate the data against our schema
    const result = templatesDataSchema.safeParse(rawData);

    if (!result.success) {
      console.error('Data validation error:', result.error.format());
      // Return fallback data if validation fails
      return getFallbackData();
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching templates data:', error);
    // Return fallback data if fetch fails
    return getFallbackData();
  }
}
