import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function CompanyTable({ companies = [] }) {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3 className="table-title">Peer Group Overview</h3>
        <p className="table-subtitle">Summary comparison of key valuation and trading metrics</p>
      </div>

      <div className="table-wrapper">
        <table className="peer-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>Change</th>
              <th>Change %</th>
              <th>Day Range</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.symbol} className={c.primary ? 'primary-row' : ''}>
                <td className="company-name-cell">
                  <span
                    className="company-indicator"
                    style={{ backgroundColor: c.color }}
                  />
                  <span>{c.name}</span>
                  {c.primary && <span className="primary-tag">Primary</span>}
                </td>
                <td className="symbol-cell font-mono">{c.symbol}</td>
                <td className="font-mono font-bold">${c.currentPrice.toFixed(2)}</td>
                <td className={`font-mono ${c.isPositive ? 'positive-text' : 'negative-text'}`}>
                  {c.change > 0 ? `+$${c.change.toFixed(2)}` : `-$${Math.abs(c.change).toFixed(2)}`}
                </td>
                <td className="font-mono">
                  <span className={`pill-badge ${c.isPositive ? 'pill-positive' : 'pill-negative'}`}>
                    {c.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {c.changePercent > 0 ? `+${c.changePercent}%` : `${c.changePercent}%`}
                  </span>
                </td>
                <td className="font-mono text-muted">
                  ${c.dayLow?.toFixed(2)} - ${c.dayHigh?.toFixed(2)}
                </td>
                <td className="font-mono">{c.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
