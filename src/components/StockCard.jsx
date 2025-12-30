export default function StockCard({ stock }) {
  if (!stock || !stock.latest) return null;

  const { symbol, currency, latest, change, changePercent } = stock;
  
  const currentPrice = parseFloat(latest.close).toFixed(2);
  const isPositive = parseFloat(changePercent) >= 0;

  return (
    <div className="stock-card-container">
      <div className="stock-card-header">
        <div>
          <h2 className="company-name">{symbol}</h2>
          <p className="stock-symbol-sub">{stock.exchange || "Market"}</p>
        </div>
       
        <div className={isPositive ? "price-badge-green" : "price-badge-red"}>
          {isPositive ? "+" : ""}{changePercent}%
        </div>
      </div>

      <div className="price-section">
        <span className="current-price">{currentPrice}</span>
        <span className="currency-label">{currency}</span>
        <div className={isPositive ? "price-change-text-green" : "price-change-text-red"}>
          {isPositive ? "+" : ""}{change} {currency} today
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Day High</span>
          <span className="stat-value">{parseFloat(latest.high).toFixed(2)} {currency}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Day Low</span>
          <span className="stat-value">{parseFloat(latest.low).toFixed(2)} {currency}</span>
        </div>
      </div>

      <div className="last-updated">
        Last updated: {latest.datetime}
      </div>
    </div>
  );
}