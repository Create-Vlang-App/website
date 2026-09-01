import { describe, expect, it } from 'vitest';
import { categorySchema, extensionSchema, templateSchema, templatesDataSchema } from '../schemas';

describe('categorySchema', () => {
  it('should validate a valid category', () => {
    const validCategory = {
      slug: 'web',
      name: 'Web',
      description: 'HTTP servers and web-facing V apps.',
      details: 'veb/vweb starters and related HTTP tooling.',
      labels: ['web', 'http', 'veb'],
    };
    expect(categorySchema.safeParse(validCategory).success).toBe(true);
  });

  it('should reject a category with missing required fields', () => {
    const invalidCategory = {
      slug: 'web',
      name: 'Web',
    };
    expect(categorySchema.safeParse(invalidCategory).success).toBe(false);
  });
});

describe('templateSchema', () => {
  it('should validate a valid template', () => {
    const validTemplate = {
      name: 'Web Server',
      description: 'A vweb HTTP server starter.',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web',
      labels: ['V', 'vweb'],
      slug: 'web-server',
    };
    expect(templateSchema.safeParse(validTemplate).success).toBe(true);
  });

  it('should reject a template with invalid url', () => {
    const invalidTemplate = {
      name: 'Web Server Starter',
      description: 'A vweb/veb HTTP starter.',
      url: 'not-a-url',
      type: 'web-server',
      category: 'web',
      labels: ['V', 'vweb'],
      slug: 'web-server',
    };
    expect(templateSchema.safeParse(invalidTemplate).success).toBe(false);
  });
});

describe('extensionSchema', () => {
  it('should validate a valid extension with string type', () => {
    const validExtension = {
      name: 'V Docker',
      description: 'Add Docker packaging.',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/v-docker',
      type: 'web-server',
      category: 'containers',
      labels: ['Docker', 'DevOps'],
      slug: 'v-docker',
    };
    expect(extensionSchema.safeParse(validExtension).success).toBe(true);
  });

  it('should validate a valid extension with array type', () => {
    const validExtension = {
      name: 'GitHub Setup',
      description: 'Add GitHub automation.',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/github-setup',
      type: ['web-server', 'cli-app', 'library-starter'],
      category: 'ci',
      labels: ['GitHub', 'CI'],
      slug: 'github-setup',
    };
    expect(extensionSchema.safeParse(validExtension).success).toBe(true);
  });
});

describe('templatesDataSchema', () => {
  it('should validate complete templates data', () => {
    const validData = {
      templates: [
        {
          name: 'Web Server',
          description: 'A vweb/veb HTTP starter.',
          url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/web-server',
          type: 'web-server',
          category: 'web',
          labels: ['V', 'vweb'],
          slug: 'web-server',
        },
      ],
      extensions: [
        {
          name: 'V Docker',
          description: 'Add Dockerfile and compose for V apps.',
          url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/v-docker',
          type: 'web-server',
          category: 'containers',
          labels: ['Docker'],
          slug: 'v-docker',
        },
      ],
      categories: [
        {
          slug: 'web',
          name: 'Web',
          description: 'HTTP servers and web APIs built with V.',
          details: 'Templates for vweb/veb servers.',
          labels: ['Web', 'V'],
        },
      ],
    };
    expect(templatesDataSchema.safeParse(validData).success).toBe(true);
  });
});
