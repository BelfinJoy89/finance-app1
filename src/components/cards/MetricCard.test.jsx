import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
  it('renders title, value, and positive change percentage correctly', () => {
    render(
      <MetricCard
        title="IBM Current Stock"
        subtitle="NYSE: IBM"
        value="$232.50"
        change={3.7}
        changePercent={1.62}
        badgeText="Primary"
      />
    );

    expect(screen.getByText('IBM Current Stock')).toBeInTheDocument();
    expect(screen.getByText('NYSE: IBM')).toBeInTheDocument();
    expect(screen.getByText('$232.50')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('+3.7 (+1.62%)')).toBeInTheDocument();
  });
});
