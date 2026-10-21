import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CustomCompanyExplorer from './CustomCompanyExplorer';
import { TIME_RANGES } from '../../services/mockData';

describe('CustomCompanyExplorer', () => {
  it('renders initial empty guidance state and quick select buttons', () => {
    render(<CustomCompanyExplorer activeTimeRange={TIME_RANGES.WEEK} />);

    expect(screen.getByText('Individual Company Deep-Dive')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('e.g. NVDA, AAPL, GOOGL')).toBeInTheDocument();
    expect(screen.getByText('NVDA')).toBeInTheDocument();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
  });

  it('searches for a company and renders its metric card and chart when selected', async () => {
    render(<CustomCompanyExplorer activeTimeRange={TIME_RANGES.WEEK} />);

    const input = screen.getByPlaceholderText('e.g. NVDA, AAPL, GOOGL');
    const button = screen.getByRole('button', { name: /Analyze/i });

    fireEvent.change(input, { target: { value: 'NVDA' } });
    fireEvent.click(button);

    // Shows loading state initially
    expect(screen.getByText(/Retrieving financial data for/i)).toBeInTheDocument();

    // Resolves and displays company details
    await waitFor(() => {
       expect(screen.getByText('NVIDIA Corporation')).toBeInTheDocument();
       expect(screen.getByText('$128.20')).toBeInTheDocument();
       expect(screen.getByText('Market Cap: 3.15T')).toBeInTheDocument();
    });
  });

  it('shows clear no-data error message when an invalid symbol is entered', async () => {
    render(<CustomCompanyExplorer activeTimeRange={TIME_RANGES.WEEK} />);

    const input = screen.getByPlaceholderText('e.g. NVDA, AAPL, GOOGL');
    const button = screen.getByRole('button', { name: /Analyze/i });

    fireEvent.change(input, { target: { value: 'XYZNOTFOUND' } });
    fireEvent.click(button);

    await waitFor(() => {
       expect(screen.getByRole('alert')).toBeInTheDocument();
       expect(
         screen.getByText('No market data available for ticker symbol "XYZNOTFOUND".')
       ).toBeInTheDocument();
    });
  });

  it('allows quick selection via company badge pill', async () => {
    render(<CustomCompanyExplorer activeTimeRange={TIME_RANGES.WEEK} />);

    const aaplPill = screen.getByRole('button', { name: 'AAPL' });
    fireEvent.click(aaplPill);

    await waitFor(() => {
       expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
       expect(screen.getByText('$224.20')).toBeInTheDocument();
    });
  });
});
