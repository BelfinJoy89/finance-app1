export const TRACKED_COMPANIES = [
  { symbol: 'IBM', name: 'International Business Machines', primary: true, color: '#0f62fe' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', primary: false, color: '#00a4ef' },
  { symbol: 'ORCL', name: 'Oracle Corporation', primary: false, color: '#f80000' },
  { symbol: 'SAP', name: 'SAP SE', primary: false, color: '#008fd3' },
  { symbol: 'CRM', name: 'Salesforce, Inc.', primary: false, color: '#00a1e0' }
];

export const POPULAR_SYMBOLS = ['NVDA', 'AAPL', 'GOOGL', 'AMZN', 'META'];

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
  },
  NVDA: {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    currentPrice: 128.20,
    previousClose: 124.50,
    dayHigh: 130.40,
    dayLow: 123.80,
    volume: 42100000,
    marketCap: '3.15T',
    history7d: [
      { date: 'Day -6', price: 118.50 },
      { date: 'Day -5', price: 120.20 },
      { date: 'Day -4', price: 122.90 },
      { date: 'Day -3', price: 121.40 },
      { date: 'Day -2', price: 125.10 },
      { date: 'Day -1', price: 124.50 },
      { date: 'Today', price: 128.20 }
    ],
    quarterHistory: [
      { period: 'W1', price: 92.00 },
      { period: 'W2', price: 96.50 },
      { period: 'W3', price: 101.20 },
      { period: 'W4', price: 105.80 },
      { period: 'W5', price: 112.40 },
      { period: 'W6', price: 109.00 },
      { period: 'W7', price: 115.60 },
      { period: 'W8', price: 119.80 },
      { period: 'W9', price: 122.30 },
      { period: 'W10', price: 120.50 },
      { period: 'W11', price: 124.00 },
      { period: 'W12', price: 128.20 }
    ]
  },
  AAPL: {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 224.20,
    previousClose: 221.80,
    dayHigh: 225.50,
    dayLow: 220.90,
    volume: 31500000,
    marketCap: '3.42T',
    history7d: [
      { date: 'Day -6', price: 218.00 },
      { date: 'Day -5', price: 219.40 },
      { date: 'Day -4', price: 222.10 },
      { date: 'Day -3', price: 220.80 },
      { date: 'Day -2', price: 222.90 },
      { date: 'Day -1', price: 221.80 },
      { date: 'Today', price: 224.20 }
    ],
    quarterHistory: [
      { period: 'W1', price: 182.00 },
      { period: 'W2', price: 186.40 },
      { period: 'W3', price: 191.00 },
      { period: 'W4', price: 195.80 },
      { period: 'W5', price: 201.20 },
      { period: 'W6', price: 199.50 },
      { period: 'W7', price: 207.00 },
      { period: 'W8', price: 212.40 },
      { period: 'W9', price: 216.00 },
      { period: 'W10', price: 215.10 },
      { period: 'W11', price: 220.00 },
      { period: 'W12', price: 224.20 }
    ]
  },
  GOOGL: {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    currentPrice: 178.60,
    previousClose: 175.90,
    dayHigh: 180.20,
    dayLow: 175.10,
    volume: 14800000,
    marketCap: '2.21T',
    history7d: [
      { date: 'Day -6', price: 171.00 },
      { date: 'Day -5', price: 172.50 },
      { date: 'Day -4', price: 174.80 },
      { date: 'Day -3', price: 173.90 },
      { date: 'Day -2', price: 176.40 },
      { date: 'Day -1', price: 175.90 },
      { date: 'Today', price: 178.60 }
    ],
    quarterHistory: [
      { period: 'W1', price: 152.00 },
      { period: 'W2', price: 155.80 },
      { period: 'W3', price: 159.20 },
      { period: 'W4', price: 163.50 },
      { period: 'W5', price: 167.00 },
      { period: 'W6', price: 165.20 },
      { period: 'W7', price: 170.40 },
      { period: 'W8', price: 174.10 },
      { period: 'W9', price: 173.00 },
      { period: 'W10', price: 175.80 },
      { period: 'W11', price: 174.90 },
      { period: 'W12', price: 178.60 }
    ]
  },
  AMZN: {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    currentPrice: 186.40,
    previousClose: 188.10,
    dayHigh: 189.50,
    dayLow: 185.00,
    volume: 22300000,
    marketCap: '1.94T',
    history7d: [
      { date: 'Day -6', price: 191.00 },
      { date: 'Day -5', price: 189.80 },
      { date: 'Day -4', price: 188.40 },
      { date: 'Day -3', price: 190.20 },
      { date: 'Day -2', price: 189.00 },
      { date: 'Day -1', price: 188.10 },
      { date: 'Today', price: 186.40 }
    ],
    quarterHistory: [
      { period: 'W1', price: 170.00 },
      { period: 'W2', price: 173.50 },
      { period: 'W3', price: 177.00 },
      { period: 'W4', price: 181.20 },
      { period: 'W5', price: 185.00 },
      { period: 'W6', price: 182.80 },
      { period: 'W7', price: 187.40 },
      { period: 'W8', price: 192.10 },
      { period: 'W9', price: 190.50 },
      { period: 'W10', price: 188.90 },
      { period: 'W11', price: 187.20 },
      { period: 'W12', price: 186.40 }
    ]
  },
  META: {
    symbol: 'META',
    name: 'Meta Platforms, Inc.',
    currentPrice: 585.10,
    previousClose: 578.40,
    dayHigh: 589.00,
    dayLow: 576.20,
    volume: 11200000,
    marketCap: '1.48T',
    history7d: [
      { date: 'Day -6', price: 565.00 },
      { date: 'Day -5', price: 569.80 },
      { date: 'Day -4', price: 574.10 },
      { date: 'Day -3', price: 571.50 },
      { date: 'Day -2', price: 579.20 },
      { date: 'Day -1', price: 578.40 },
      { date: 'Today', price: 585.10 }
    ],
    quarterHistory: [
      { period: 'W1', price: 485.00 },
      { period: 'W2', price: 495.20 },
      { period: 'W3', price: 510.00 },
      { period: 'W4', price: 524.80 },
      { period: 'W5', price: 540.10 },
      { period: 'W6', price: 532.50 },
      { period: 'W7', price: 548.00 },
      { period: 'W8', price: 562.40 },
      { period: 'W9', price: 570.10 },
      { period: 'W10', price: 568.00 },
      { period: 'W11', price: 575.20 },
      { period: 'W12', price: 585.10 }
    ]
  }
};
