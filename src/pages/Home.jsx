import { useNavigate } from "react-router-dom";
import SearchBar from "../components/searchbar.jsx";

import heroImage from "../pic/سهم.jpg"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
     
      <nav className="navbar">
        <div className="logo">
          <span className="chart-icon">📈</span> US Stock Tracker
        </div>
      </nav>

      
      <main className="hero-container">
     
        <div className="hero-text">
          <h1>Track Egyptian Stock <br /> Prices Instantly</h1>
          <p>
            Get real-time updates on Egyptian stock market prices. Search
            for any stock symbol and monitor daily changes, highs, and lows.
          </p>

          <div className="search-section">
            {/* مكون البحث مع توجيه لصفحة التفاصيل */}
            <SearchBar onSearch={(symbol) => navigate(`/stock/${symbol}`)} />
          </div>

          {/* الأيقونات الثلاثة أسفل البحث كما في الصورة 1 */}
          <div className="features-row">
            <div className="feature">
              <div className="icon-bg blue-bg">📈</div>
              <p>Live Price Updates</p>
            </div>
            <div className="feature">
              <div className="icon-bg green-bg">📊</div>
              <p>Daily High/Low</p>
            </div>
            <div className="feature">
              <div className="icon-bg purple-bg">🕒</div>
              <p>Real-time Tracking</p>
            </div>
          </div>
        </div>

        
        <div className="hero-image">
          <img src={heroImage} alt="Stock Market Analysis" />
        </div>
      </main>
    </div>
  );
}