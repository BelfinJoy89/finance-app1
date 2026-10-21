import { useState } from 'react';
import { Search, Loader2, AlertCircle, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import SingleCompanyTrendCard from './SingleCompanyTrendCard';
import { POPULAR_SYMBOLS, TIME_RANGE_LABELS } from '../../services/mockData';
import { fetchCompanyData, formatSingleCompanySeries } from '../../services/financeService';

export default function CustomCompanyExplorer({ activeTimeRange }) {
  const [inputSymbol, setInputSymbol] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (symbolToSearch) => {
    const sym = (symbolToSearch || inputSymbol).trim().toUpperCase();
    if (!sym) {
      setError('Please enter a ticker symbol.');
      setSelectedCompany(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await fetchCompanyData(sym);
      setSelectedCompany(data);
    } catch (err) {
      setSelectedCompany(null);
      setError(err.message || `No data available for symbol "${sym}".`);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleQuickPick = (sym) => {
    setInputSymbol(sym);
    handleSearch(sym);
  };

  const seriesData = selectedCompany
    ? formatSingleCompanySeries(selectedCompany, activeTimeRange)
    : [];

  return (
    <div className="explorer-card">
      <div className="explorer-header">
        <div className="explorer-title-block">
          <div className="explorer-icon">
            <TrendingUp size={20} color="#0f62fe" />
          </div>
          <div>
            <h3 className="explorer-title">Individual Company Deep-Dive</h3>
            <p className="explorer-subtitle">
              Enter any stock ticker symbol to generate a dedicated performance graph and metrics
            </p>
          </div>
        </div>

        {/* Search input bar */}
        <form onSubmit={handleFormSubmit} className="explorer-search-form">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="e.g. NVDA, AAPL, GOOGL"
              value={inputSymbol}
              onChange={(e) => {
                setInputSymbol(e.target.value.toUpperCase());
                if (error) setError(null);
              }}
              aria-label="Stock ticker symbol"
            />
          </div>
          <button
            type="submit"
            className="search-btn"
            disabled={loading || !inputSymbol.trim()}
          >
            {loading ? <Loader2 size={16} className="spin" /> : 'Analyze'}
          </button>
        </form>
      </div>

      {/* Quick Picks */}
      <div className="quick-picks-bar">
        <span className="quick-picks-label">Quick select:</span>
        <div className="quick-picks-group">
          {POPULAR_SYMBOLS.map((sym) => (
            <button
              key={sym}
              type="button"
              className={`quick-pick-pill ${selectedCompany?.symbol === sym ? 'active' : ''}`}
              onClick={() => handleQuickPick(sym)}
            >
              {sym}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content: Loading / Error / Initial / Chart */}
      <div className="explorer-content">
        {loading && (
          <div className="explorer-state-box loading-box">
            <Loader2 size={28} className="spin text-blue" />
            <p>Retrieving financial data for <strong>{inputSymbol.trim().toUpperCase()}</strong>...</p>
          </div>
        )}

        {!loading && error && (
          <div className="explorer-state-box error-box" role="alert">
            <AlertCircle size={24} className="text-negative" />
            <div className="error-text-content">
              <strong>Lookup Failed</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && !selectedCompany && (
          <div className="explorer-state-box empty-box">
            <p className="empty-state-text">
              Type a ticker symbol above or pick one of the suggested companies to render its historical performance graph.
            </p>
          </div>
        )}

        {!loading && !error && selectedCompany && (
          <div className="explorer-results">
            {/* Quick Metrics Bar */}
            <div className="company-summary-strip">
              <div className="company-identity">
                <span className="company-badge font-mono">{selectedCompany.symbol}</span>
                <div>
                  <h4 className="company-full-name">{selectedCompany.name}</h4>
                  <span className="market-cap-tag">Market Cap: {selectedCompany.marketCap}</span>
                </div>
              </div>

              <div className="company-spot-metrics">
                <div className="spot-price-block">
                  <span className="spot-label">Current Price</span>
                  <span className="spot-price font-mono">${selectedCompany.currentPrice.toFixed(2)}</span>
                </div>
                <div className="spot-change-block">
                  <span className="spot-label">Daily Movement</span>
                  <span
                    className={`spot-change font-mono ${selectedCompany.isPositive ? 'positive' : 'negative'}`}
                  >
                    {selectedCompany.isPositive ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <ArrowDownRight size={16} />
                    )}
                    {selectedCompany.change > 0 ? '+' : ''}
                    {selectedCompany.change} ({selectedCompany.changePercent > 0 ? '+' : ''}
                    {selectedCompany.changePercent}%)
                  </span>
                </div>
                <div className="spot-range-block">
                  <span className="spot-label">Day Range</span>
                  <span className="font-mono text-muted text-sm">
                    ${selectedCompany.dayLow.toFixed(2)} - ${selectedCompany.dayHigh.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Dedicated Graph */}
            <SingleCompanyTrendCard
              company={selectedCompany}
              timeRangeLabel={TIME_RANGE_LABELS[activeTimeRange] || activeTimeRange}
              data={seriesData}
            />
          </div>
        )}
      </div>
    </div>
  );
}
