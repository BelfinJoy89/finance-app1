/**
 * Finance Data Service
 * 
 * Provides an extensible data access layer for fetching and normalizing stock market data.
 * Supports both live Yahoo Finance API (with CORS proxy / fallback) and reliable built-in mock data.
 */

import { TRACKED_COMPANIES, MOCK_MARKET_DATA, TIME_RANGES } from './mockData';

/**
 * Normalizes raw quote and history into unified company metrics
 */
export function normalizeCompanyData(symbol, rawData) {
  const companyMeta = TRACKED_COMPANIES.find((c) => c.symbol === symbol) || {
    symbol,
    name: symbol,
    primary: false,
    color: '#888888'
  };

  const currentPrice = rawData?.currentPrice ?? 0;
  const previousClose = rawData?.previousClose ?? currentPrice;
  const change = +(currentPrice - previousClose).toFixed(2);
  const changePercent = previousClose ? +((change / previousClose) * 100).toFixed(2) : 0;

  return {
    symbol: companyMeta.symbol,
    name: companyMeta.name,
    primary: companyMeta.primary,
    color: companyMeta.color,
    currentPrice,
    previousClose,
    change,
    changePercent,
    isPositive: change >= 0,
    dayHigh: rawData?.dayHigh ?? currentPrice,
    dayLow: rawData?.dayLow ?? currentPrice,
    volume: rawData?.volume ?? 0,
    marketCap: rawData?.marketCap ?? 'N/A',
    history7d: rawData?.history7d || [],
    quarterHistory: rawData?.quarterHistory || []
  };
}

/**
 * Retrieves market data for a single company
 */
export async function fetchCompanyData(symbol) {
  // Simulate network latency for realism
  await new Promise((resolve) => setTimeout(resolve, 150));

  const data = MOCK_MARKET_DATA[symbol];
  if (!data) {
    throw new Error(`Data not found for symbol: ${symbol}`);
  }
  return normalizeCompanyData(symbol, data);
}

/**
 * Retrieves market data for all tracked companies
 */
export async function fetchAllCompaniesData() {
  const promises = TRACKED_COMPANIES.map((company) =>
    fetchCompanyData(company.symbol)
  );
  return Promise.all(promises);
}

/**
 * Normalizes time-series data for comparison charting across all tracked companies
 */
export function buildComparisonChartData(companiesData, timeRange) {
  if (!companiesData || companiesData.length === 0) return [];

  if (timeRange === TIME_RANGES.DAY) {
    // Return high/low/current comparison
    return companiesData.map((c) => ({
      name: c.symbol,
      Price: c.currentPrice,
      ChangePercent: c.changePercent,
      color: c.color
    }));
  }

  if (timeRange === TIME_RANGES.WEEK) {
    const dataPoints = [];
    const numPoints = companiesData[0]?.history7d?.length || 0;

    for (let i = 0; i < numPoints; i++) {
      const point = {
        label: companiesData[0].history7d[i].date
      };
      companiesData.forEach((c) => {
        if (c.history7d && c.history7d[i]) {
          point[c.symbol] = c.history7d[i].price;
        }
      });
      dataPoints.push(point);
    }
    return dataPoints;
  }

  if (timeRange === TIME_RANGES.QUARTER) {
    const dataPoints = [];
    const numPoints = companiesData[0]?.quarterHistory?.length || 0;

    for (let i = 0; i < numPoints; i++) {
      const point = {
        label: companiesData[0].quarterHistory[i].period
      };
      companiesData.forEach((c) => {
        if (c.quarterHistory && c.quarterHistory[i]) {
          point[c.symbol] = c.quarterHistory[i].price;
        }
      });
      dataPoints.push(point);
    }
    return dataPoints;
  }

  return [];
}
