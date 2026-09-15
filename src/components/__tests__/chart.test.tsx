import { render } from '@testing-library/react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts';
import { describe, expect, it, vi } from 'vitest';

import { ChartContainer, ChartLegendContent, ChartTooltipContent } from '../ui/chart';

// happy-dom has no ResizeObserver, so report fixed dimensions to recharts.
class MockResizeObserver {
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback(
      [{ target, contentRect: { width: 400, height: 300 } } as unknown as ResizeObserverEntry],
      this as unknown as ResizeObserver,
    );
  }

  unobserve() {}

  disconnect() {}
}

vi.stubGlobal('ResizeObserver', MockResizeObserver);

const config = {
  desktop: { label: 'Desktop', color: '#ff0000' },
};

const data = [{ month: 'Jan', desktop: 12345 }];

function renderChart(tooltipIndex?: number) {
  return render(
    <ChartContainer config={config}>
      <BarChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <Tooltip content={<ChartTooltipContent />} defaultIndex={tooltipIndex} />
        <Legend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="#ff0000" />
      </BarChart>
    </ChartContainer>,
  );
}

describe('ChartContainer', () => {
  it('exposes the chart config as CSS variables', () => {
    const { container } = renderChart();
    const style = container.querySelector('style');
    expect(container.firstElementChild?.getAttribute('data-chart')).toMatch(/^chart-/);
    expect(style?.textContent).toContain('--color-desktop: #ff0000');
  });

  it('renders legend entries from the recharts v3 payload', () => {
    const { container } = renderChart();
    expect(container.textContent).toContain('Desktop');
  });
});

describe('ChartTooltipContent', () => {
  it('renders the active tooltip label and value', () => {
    const { container } = renderChart(0);
    expect(container.textContent).toContain('Jan');
    expect(container.textContent).toContain('12,345');
  });

  it('renders nothing when the tooltip is inactive', () => {
    const { container } = renderChart();
    expect(container.textContent).not.toContain('12,345');
  });
});
