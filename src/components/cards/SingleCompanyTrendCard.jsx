import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function SingleCompanyTrendCard({
  company,
  timeRangeLabel,
  data = [],
  height = 280,
  valuePrefix = '$'
}) {
  const isPositive = company.change >= 0;
  const strokeColor = isPositive ? '#10b981' : '#ef4444';
  const fillColor = isPositive ? '#10b98120' : '#ef444420';

  return (
    <div className="single-trend-card">
      <div className="single-trend-header">
        <div>
          <h4 className="single-trend-title">
            {company.symbol} Performance Trend ({timeRangeLabel})
          </h4>
          <p className="single-trend-subtitle">
            Historical price chart for {company.name}
          </p>
        </div>
        <div className="single-trend-legend">
          <span
            className="legend-dot"
            style={{ backgroundColor: strokeColor }}
          />
          <span className="font-mono text-xs">{company.symbol} Price</span>
        </div>
      </div>

      <div className="chart-body" style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id={`gradient-${company.symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={strokeColor} stopOpacity={0.4} />
                <stop offset="95%" stopColor={strokeColor} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis
              dataKey="label"
              stroke="#525252"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="#525252"
              fontSize={12}
              tickLine={false}
              domain={['auto', 'auto']}
              tickFormatter={(v) => `${valuePrefix}${v}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${valuePrefix}${Number(value).toFixed(2)}`, company.symbol]}
            />
            <Area
              type="monotone"
              dataKey="price"
              name={company.symbol}
              stroke={strokeColor}
              strokeWidth={2.5}
              fillOpacity={1}
              fill={fillColor || `url(#gradient-${company.symbol})`}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
