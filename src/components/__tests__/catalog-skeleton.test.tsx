import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { CatalogSkeletonGrid } from '../catalog-skeleton';

describe('CatalogSkeletonGrid', () => {
  it('renders six skeleton cards by default', () => {
    const html = renderToStaticMarkup(<CatalogSkeletonGrid />);
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-busy="true"');
    // Each card renders an icon skeleton (h-10 w-10) exactly once.
    expect(html.match(/h-10 w-10/g)?.length).toBe(6);
  });

  it('renders the requested number of skeleton cards', () => {
    const html = renderToStaticMarkup(<CatalogSkeletonGrid count={3} />);
    expect(html.match(/h-10 w-10/g)?.length).toBe(3);
  });

  it('exposes an accessible loading label', () => {
    const html = renderToStaticMarkup(<CatalogSkeletonGrid label="Loading templates…" />);
    expect(html).toContain('aria-label="Loading templates…"');
    expect(html).toContain('Loading templates…');
  });
});
