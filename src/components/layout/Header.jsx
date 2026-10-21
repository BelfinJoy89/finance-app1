import { Activity, RefreshCw } from 'lucide-react';

export default function Header({ onRefresh, isRefreshing, lastUpdated }) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-section">
          <div className="brand-icon">
            <Activity size={24} color="#0f62fe" />
          </div>
          <div>
            <h1 className="brand-title">Enterprise Finance Dashboard</h1>
            <p className="brand-subtitle">IBM & Competitor Market Intelligence</p>
          </div>
        </div>

        <div className="header-actions">
          {lastUpdated && (
            <span className="last-updated">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          <button
            className="refresh-btn"
            onClick={onRefresh}
            disabled={isRefreshing}
            aria-label="Refresh market data"
          >
            <RefreshCw size={16} className={isRefreshing ? 'spin' : ''} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh Data'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
