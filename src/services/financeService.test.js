import { describe, it, expect } from 'vitest';
import {
  normalizeCompanyData,
  buildComparisonChartData,
  fetchCompanyData,
  formatSingleCompanySeries
} from './financeService';
import { TIME_RANGES } from './mockData';

describe('financeService', () => {
  describe('normalizeCompanyData', () => {
    it('correctly calculates change and change percentage', () => {
      const rawData = {
        name: 'International Business Machines',
        currentPrice: 200,
        previousClose: 190,
        dayHigh: 205,
        dayLow: 188,
        volume: 1000,
        marketCap: '100B'
      };

      const result = normalizeCompanyData('IBM', rawData);

      expect(result.symbol).toBe('IBM');
      expect(result.name).toBe('International Business Machines');
      expect(result.primary).toBe(true);
      expect(result.change).toBe(10);
      expect(result.changePercent).toBe(5.26);
      expect(result.isPositive).toBe(true);
    });

    it('handles negative price movements gracefully', () => {
      const rawData = {
        name: 'Oracle Corporation',
        currentPrice: 95,
        previousClose: 100
      };

      const result = normalizeCompanyData('ORCL', rawData);

      expect(result.change).toBe(-5);
      expect(result.changePercent).toBe(-5);
      expect(result.isPositive).toBe(false);
    });
  });

  describe('fetchCompanyData', () => {
    it('fetches and normalizes a tracked company (e.g. IBM)', async () => {
      const ibm = await fetchCompanyData('IBM');
      expect(ibm.symbol).toBe('IBM');
      expect(ibm.currentPrice).toBeGreaterThan(0);
      expect(ibm.history7d.length).toBeGreaterThan(0);
    });

    it('fetches a user-searched company (e.g. NVDA) with case insensitivity', async () => {
      const nvda = await fetchCompanyData('nvda');
      expect(nvda.symbol).toBe('NVDA');
      expect(nvda.name).toBe('NVIDIA Corporation');
      expect(nvda.currentPrice).toBe(128.20);
    });

    it('rejects empty or whitespace symbols', async () => {
      await expect(fetchCompanyData('')).rejects.toThrow('Please enter a valid ticker symbol.');
      await expect(fetchCompanyData('   ')).rejects.toThrow('Please enter a valid ticker symbol.');
    });

    it('throws clear error message when ticker symbol is not available', async () => {
      await expect(fetchCompanyData('UNKNOWN_SYM')).rejects.toThrow(
        'No market data available for ticker symbol "UNKNOWN_SYM".'
      );
    });
  });

  describe('buildComparisonChartData', () => {
    const mockCompanies = [
      {
        symbol: 'IBM',
        color: '#0f62fe',
        currentPrice: 230,
        changePercent: 1.5,
        history7d: [{ date: 'Day -1', price: 228 }, { date: 'Today', price: 230 }],
        quarterHistory: [{ period: 'W1', price: 210 }, { period: 'W2', price: 230 }]
      },
      {
        symbol: 'MSFT',
        color: '#00a4ef',
        currentPrice: 410,
        changePercent: -0.5,
        history7d: [{ date: 'Day -1', price: 412 }, { date: 'Today', price: 410 }],
        quarterHistory: [{ period: 'W1', price: 400 }, { period: 'W2', price: 410 }]
      }
    ];

    it('formats 1D bar chart comparison points', () => {
      const data = buildComparisonChartData(mockCompanies, TIME_RANGES.DAY);
      expect(data).toHaveLength(2);
      expect(data[0]).toEqual({
        name: 'IBM',
        Price: 230,
        ChangePercent: 1.5,
        color: '#0f62fe'
      });
    });

    it('formats 7D line chart time series', () => {
      const data = buildComparisonChartData(mockCompanies, TIME_RANGES.WEEK);
      expect(data).toHaveLength(2);
      expect(data[0]).toEqual({
        label: 'Day -1',
        IBM: 228,
        MSFT: 412
      });
      expect(data[1]).toEqual({
        label: 'Today',
        IBM: 230,
        MSFT: 410
      });
    });
  });

  describe('formatSingleCompanySeries', () => {
    const mockCompany = {
      symbol: 'NVDA',
      previousClose: 120,
      currentPrice: 128,
      dayLow: 119,
      dayHigh: 130,
      history7d: [
        { date: 'Day -1', price: 124 },
        { date: 'Today', price: 128 }
      ],
      quarterHistory: [
        { period: 'W1', price: 100 },
        { period: 'W2', price: 128 }
      ]
    };

    it('formats 1D single company chart series', () => {
      const result = formatSingleCompanySeries(mockCompany, TIME_RANGES.DAY);
      expect(result).toHaveLength(4);
      expect(result[0]).toEqual({ label: 'Prev Close', price: 120 });
      expect(result[2]).toEqual({ label: 'Current', price: 128 });
    });

    it('formats 7D single company chart series', () => {
      const result = formatSingleCompanySeries(mockCompany, TIME_RANGES.WEEK);
      expect(result).toHaveLength(2);
      expect(result[1]).toEqual({ label: 'Today', price: 128 });
    });

    it('formats 1Q single company chart series', () => {
      const result = formatSingleCompanySeries(mockCompany, TIME_RANGES.QUARTER);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ label: 'W1', price: 100 });
    });
  });
});
