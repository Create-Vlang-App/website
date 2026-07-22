import { describe, expect, it } from 'vitest';
import type { Extension, Template } from '../schemas';
import { cn, isCompatible, validateExtension, validateTemplate } from '../utils';

describe('cn', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const condition = true;
    expect(cn(condition && 'active')).toBe('active');
  });
});

describe('validateTemplate', () => {
  it('should return null for invalid data', () => {
    const invalidData = { name: 'Test' };
    expect(validateTemplate(invalidData)).toBeNull();
  });

  it('should return data for valid template', () => {
    const validData = {
      name: 'Web Server Starter',
      description: 'A vweb HTTP server starter.',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web-applications',
      labels: ['V', 'vweb'],
      slug: 'web-server',
    };
    const result = validateTemplate(validData);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('Web Server Starter');
  });
});

describe('validateExtension', () => {
  it('should return null for invalid data', () => {
    const invalidData = { name: 'Test' };
    expect(validateExtension(invalidData)).toBeNull();
  });

  it('should return data for valid extension', () => {
    const validData = {
      name: 'V Docker',
      description: 'Add Docker packaging.',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/v-docker',
      type: 'web-server',
      category: 'containers',
      labels: ['Docker'],
      slug: 'v-docker',
    };
    const result = validateExtension(validData);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('V Docker');
  });
});

describe('isCompatible', () => {
  it('should return true when extension type matches template type', () => {
    const template = { type: 'react' } as Template;
    const extension = { type: 'react' } as Extension;
    expect(isCompatible(template, extension)).toBe(true);
  });

  it('should return true when extension type array includes template type', () => {
    const template = { type: 'react' } as Template;
    const extension = { type: ['react', 'nextjs'] } as Extension;
    expect(isCompatible(template, extension)).toBe(true);
  });

  it('should return false when extension type does not match', () => {
    const template = { type: 'react' } as Template;
    const extension = { type: 'nextjs' } as Extension;
    expect(isCompatible(template, extension)).toBe(false);
  });
});
