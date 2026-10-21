import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export default function MetricCard({
  title,
  subtitle,
  value,
  change,
  changePercent,
  badgeText,
  badgeColor,
  icon: Icon
}) {
  const isPositive = typeof change === 'number' ? change >= 0 : null;

  return (
    <div className="metric-card">
      <div className="metric-header">
        <div>
          <span className="metric-title">{title}</span>
          {subtitle && <p className="metric-subtitle">{subtitle}</p>}
        </div>
        {badgeText && (
          <span
            className="metric-badge"
            style={{ backgroundColor: `${badgeColor || '#0f62fe'}20`, color: badgeColor || '#0f62fe' }}
          >
            {badgeText}
          </span>
        )}
        {Icon && <Icon className="metric-icon" size={20} />}
      </div>

      <div className="metric-body">
        <div className="metric-value">{value}</div>
        {typeof change === 'number' && (
          <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
            {change > 0 ? (
              <ArrowUpRight size={16} />
            ) : change < 0 ? (
              <ArrowDownRight size={16} />
            ) : (
              <Minus size={16} />
            )}
            <span>
              {change > 0 ? '+' : ''}
              {change} ({changePercent > 0 ? '+' : ''}
              {changePercent}%)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
