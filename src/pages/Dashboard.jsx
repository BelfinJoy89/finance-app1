import { useState, useEffect, useCallback } from 'react';
import Header from '../components/layout/Header';
import MetricCard from '../components/cards/MetricCard';
import TrendChartCard from '../components/cards/TrendChartCard';
import BarComparisonCard from '../components/cards/BarComparisonCard';
import TimeRangeSelector from '../components/common/TimeRangeSelector';
import CompanyTable from '../components/common/CompanyTable';
import { TIME_RANGES, TRACKED_COMPANIES } from '../services/mockData';
import { fetchAllCompaniesData, buildComparisonChartData } from '../services/financeService';
import { DollarSign, TrendingUp, BarChart2, Award } from 'lucide-react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState(TIME_RANGES.WEEK);
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllCompaniesData();
      setCompaniesData(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message || 'Failed to fetch financial data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const ibmData = companiesData.find((c) => c.symbol === 'IBM');
  const chartData = buildComparisonChartData(companiesData, timeRange);

  const chartLines = TRACKED_COMPANIES.map((c) => ({
    key: c.symbol,
    name: `${c.symbol} (${c.name})`,
    color: c.color,
    strokeWidth: c.symbol === 'IBM' ? 3 : 1.5
  }));

  return (
    <div className="dashboard-container">
      <Header
        onRefresh={loadData}
        isRefreshing={loading}
        lastUpdated={lastUpdated}
      />

      <main className="dashboard-main">
        {error && (
          <div className="error-banner" role="alert">
            <p><strong>Error loading data:</strong> {error}</p>
            <button onClick={loadData} className="retry-btn">Retry</button>
          </div>
        )}

        {/* Top Summary Metrics */}
        <section className="metrics-grid">
          <MetricCard
            title="IBM Current Stock"
            subtitle="NYSE: IBM"
            value={ibmData ? `$${ibmData.currentPrice.toFixed(2)}` : '--'}
            change={ibmData?.change}
            changePercent={ibmData?.changePercent}
            badgeText="Primary Focus"
            badgeColor="#0f62fe"
            icon={DollarSign}
          />
          <MetricCard
            title="Peer Group Average"
            subtitle="5 Tracked Tech Leaders"
            value={
              companiesData.length > 0
                ? `$${(companiesData.reduce((acc, c) => acc + c.currentPrice, 0) / companiesData.length).toFixed(2)}`
                : '--'
            }
            change={
              companiesData.length > 0
                ? +(companiesData.reduce((acc, c) => acc + c.change, 0) / companiesData.length).toFixed(2)
                : 0
            }
            changePercent={
              companiesData.length > 0
                ? +(companiesData.reduce((acc, c) => acc + c.changePercent, 0) / companiesData.length).toFixed(2)
                : 0
            }
            badgeText="Industry Cohort"
            badgeColor="#8a3ffc"
            icon={TrendingUp}
          />
          <MetricCard
            title="IBM Market Cap"
            subtitle="Enterprise Valuation"
            value={ibmData?.marketCap || '--'}
            badgeText="Large Cap"
            badgeColor="#0043ce"
            icon={Award}
          />
          <MetricCard
            title="Active Companies"
            subtitle="Cross-Competitor Scope"
            value={`${companiesData.length} Tracked`}
            badgeText="Real-time"
            badgeColor="#198038"
            icon={BarChart2}
          />
        </section>

        {/* Time Window Switcher & Visualizations */}
        <section className="visualizations-section">
          <div className="section-header-bar">
            <div>
              <h2 className="section-title">Comparative Market Performance</h2>
              <p className="section-subtitle">
                Explore IBM vs. Microsoft, Oracle, SAP, and Salesforce across time windows
              </p>
            </div>
            <TimeRangeSelector
              activeRange={timeRange}
              onSelectRange={setTimeRange}
            />
          </div>

          <div className="charts-grid">
            {timeRange === TIME_RANGES.DAY ? (
              <BarComparisonCard
                title="Current Day Price Comparison"
                subtitle="Spot market closing and intraday levels across peer group"
                data={chartData}
                dataKey="Price"
                height={340}
              />
            ) : (
              <TrendChartCard
                title={
                  timeRange === TIME_RANGES.WEEK
                    ? '7-Day Price Trajectory (Relative Performance)'
                    : 'Quarterly Price Trend (12-Week Historical View)'
                }
                subtitle="Historical closing price comparison across all monitored tech companies"
                data={chartData}
                lines={chartLines}
                height={340}
              />
            )}
          </div>
        </section>

        {/* Detailed Table */}
        <section className="table-section">
          <CompanyTable companies={companiesData} />
        </section>
      </main>
    </div>
  );
}
