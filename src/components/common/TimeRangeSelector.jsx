import { TIME_RANGES, TIME_RANGE_LABELS } from '../../services/mockData';

export default function TimeRangeSelector({ activeRange, onSelectRange }) {
  const ranges = [
    { key: TIME_RANGES.DAY, label: TIME_RANGE_LABELS[TIME_RANGES.DAY] },
    { key: TIME_RANGES.WEEK, label: TIME_RANGE_LABELS[TIME_RANGES.WEEK] },
    { key: TIME_RANGES.QUARTER, label: TIME_RANGE_LABELS[TIME_RANGES.QUARTER] }
  ];

  return (
    <div className="time-range-container">
      <span className="time-range-label">Time Window:</span>
      <div className="time-range-pill-group" role="tablist">
        {ranges.map((range) => (
          <button
            key={range.key}
            role="tab"
            aria-selected={activeRange === range.key}
            className={`time-range-pill ${activeRange === range.key ? 'active' : ''}`}
            onClick={() => onSelectRange(range.key)}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
}
