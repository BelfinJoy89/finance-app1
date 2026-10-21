export const TRACKED_COMPANIES = [
  { symbol: 'IBM', name: 'International Business Machines', primary: true, color: '#0f62fe' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', primary: false, color: '#00a4ef' },
  { symbol: 'ORCL', name: 'Oracle Corporation', primary: false, color: '#f80000' },
  { symbol: 'SAP', name: 'SAP SE', primary: false, color: '#008fd3' },
  { symbol: 'CRM', name: 'Salesforce, Inc.', primary: false, color: '#00a1e0' }
];

export const TIME_RANGES = {
  DAY: '1D',
  WEEK: '7D',
  QUARTER: '1Q'
};

export const TIME_RANGE_LABELS = {
  [TIME_RANGES.DAY]: 'Current Day',
  [TIME_RANGES.WEEK]: 'Last 7 Days',
  [TIME_RANGES.QUARTER]: 'Last Quarter'
};

// Base mock market data for reliable demo/offline scenarios
export const MOCK_MARKET_DATA = {
  IBM: {
    symbol: 'IBM',
    name: 'International Business Machines',
    currentPrice: 232.50,
    previousClose: 228.80,
    dayHigh: 234.10,
    dayLow: 227.90,
    volume: 3820000,
    marketCap: '213.8B',
    history7d: [
      { date: 'Day -6', price: 224.10 },
      { date: 'Day -5', price: 225.80 },
      { date: 'Day -4', price: 227.40 },
      { date: 'Day -3', price: 226.90 },
      { date: 'Day -2', price: 229.30 },
      { date: 'Day -1', price: 228.80 },
      { date: 'Today', price: 232.50 }
    ],
    quarterHistory: [
      { period: 'W1', price: 198.50 },
      { period: 'W2', price: 202.10 },
      { period: 'W3', price: 206.30 },
      { period: 'W4', price: 209.80 },
      { period: 'W5', price: 214.20 },
      { period: 'W6', price: 212.00 },
      { period: 'W7', price: 218.40 },
      { period: 'W8', price: 221.70 },
      { period: 'W9', price: 225.00 },
      { period: 'W10', price: 223.80 },
      { period: 'W11', price: 228.10 },
      { period: 'W12', price: 232.50 }
    ]
  },
  MSFT: {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    currentPrice: 415.60,
    previousClose: 412.30,
    dayHigh: 418.00,
    dayLow: 411.50,
    volume: 18450000,
    marketCap: '3.09T',
    history7d: [
      { date: 'Day -6', price: 408.20 },
      { date: 'Day -5', price: 410.50 },
      { date: 'Day -4', price: 414.00 },
      { date: 'Day -3', price: 411.80 },
      { date: 'Day -2', price: 413.20 },
      { date: 'Day -1', price: 412.30 },
      { date: 'Today', price: 415.60 }
    ],
    quarterHistory: [
      { period: 'W1', price: 395.00 },
      { period: 'W2', price: 399.50 },
      { period: 'W3', price: 402.10 },
      { period: 'W4', price: 405.80 },
      { period: 'W5', price: 408.30 },
      { period: 'W6', price: 406.90 },
      { period: 'W7', price: 412.00 },
      { period: 'W8', price: 415.40 },
      { period: 'W9', price: 410.80 },
      { period: 'W10', price: 413.50 },
      { period: 'W11', price: 411.20 },
      { period: 'W12', price: 415.60 }
    ]
  },
  ORCL: {
    symbol: 'ORCL',
    name: 'Oracle Corporation',
    currentPrice: 168.40,
    previousClose: 165.20,
    dayHigh: 170.10,
    dayLow: 164.80,
    volume: 7200000,
    marketCap: '462.5B',
    history7d: [
      { date: 'Day -6', price: 162.00 },
      { date: 'Day -5', price: 163.40 },
      { date: 'Day -4', price: 164.80 },
      { date: 'Day -3', price: 163.90 },
      { date: 'Day -2', price: 166.10 },
      { date: 'Day -1', price: 165.20 },
      { date: 'Today', price: 168.40 }
    ],
    quarterHistory: [
      { period: 'W1', price: 142.00 },
      { period: 'W2', price: 145.20 },
      { period: 'W3', price: 148.60 },
      { period: 'W4', price: 151.00 },
      { period: 'W5', price: 154.50 },
      { period: 'W6', price: 153.20 },
      { period: 'W7', price: 157.80 },
      { period: 'W8', price: 160.40 },
      { period: 'W9', price: 162.90 },
      { period: 'W10', price: 164.00 },
      { period: 'W11', price: 166.50 },
      { period: 'W12', price: 168.40 }
    ]
  },
  SAP: {
    symbol: 'SAP',
    name: 'SAP SE',
    currentPrice: 238.10,
    previousClose: 236.40,
    dayHigh: 239.50,
    dayLow: 235.80,
    volume: 2100000,
    marketCap: '278.4B',
    history7d: [
      { date: 'Day -6', price: 232.00 },
      { date: 'Day -5', price: 233.50 },
      { date: 'Day -4', price: 235.10 },
      { date: 'Day -3', price: 234.80 },
      { date: 'Day -2', price: 237.00 },
      { date: 'Day -1', price: 236.40 },
      { date: 'Today', price: 238.10 }
    ],
    quarterHistory: [
      { period: 'W1', price: 205.00 },
      { period: 'W2', price: 208.30 },
      { period: 'W3', price: 212.00 },
      { period: 'W4', price: 215.70 },
      { period: 'W5', price: 219.40 },
      { period: 'W6', price: 218.00 },
      { period: 'W7', price: 222.60 },
      { period: 'W8', price: 226.10 },
      { period: 'W9', price: 230.00 },
      { period: 'W10', price: 232.50 },
      { period: 'W11', price: 235.20 },
      { period: 'W12', price: 238.10 }
    ]
  },
  CRM: {
    symbol: 'CRM',
    name: 'Salesforce, Inc.',
    currentPrice: 312.90,
    previousClose: 315.60,
    dayHigh: 317.20,
    dayLow: 310.80,
    volume: 4500000,
    marketCap: '302.1B',
    history7d: [
      { date: 'Day -6', price: 320.40 },
      { date: 'Day -5', price: 318.90 },
      { date: 'Day -4', price: 316.50 },
      { date: 'Day -3', price: 319.20 },
      { date: 'Day -2', price: 317.80 },
      { date: 'Day -1', price: 315.60 },
      { date: 'Today', price: 312.90 }
    ],
    quarterHistory: [
      { period: 'W1', price: 280.00 },
      { period: 'W2', price: 285.50 },
      { period: 'W3', price: 292.00 },
      { period: 'W4', price: 298.40 },
      { period: 'W5', price: 304.10 },
      { period: 'W6', price: 301.70 },
      { period: 'W7', price: 308.20 },
      { period: 'W8', price: 314.00 },
      { period: 'W9', price: 318.50 },
      { period: 'W10', price: 316.20 },
      { period: 'W11', price: 315.00 },
      { period: 'W12', price: 312.90 }
    ]
  }
};
