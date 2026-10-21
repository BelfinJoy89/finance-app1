import { describe, it, expect } from 'vitest';
import {
  normalizeCompanyData,
  buildComparisonChartData
} from './financeService';
import { TIME_RANGES } from './mockData';

describe('financeService', () => {
  describe('normalizeCompanyData', () => {
    it('correctly calculates change and change percentage', () => {
      const rawData = {
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
        currentPrice: 95,
        previousClose: 100
      };

      const result = normalizeCompanyData('ORCL', rawData);

      expect(result.change).toBe(-5);
      expect(result.changePercent).toBe(-5);
      expect(result.isPositive).toBe(false);
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
});
