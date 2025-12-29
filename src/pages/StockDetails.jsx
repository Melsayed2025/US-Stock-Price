import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStockTimeSeries } from "../api/server.js";
import StockCard from "../components/stockcard.jsx";
import SearchBar from "../components/searchbar.jsx";
import { ArrowLeft, TrendingUp, Loader2 } from "lucide-react";

export default function StockDetails() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStockTimeSeries(symbol).then((data) => {
      setStock(data);
      setLoading(false);
    });
  }, [symbol]);

  return (
    
    <div className="min-h-screen dashboard-bg flex flex-col items-center justify-center p-6 bg-slate-50">
      
      
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm border-b border-slate-200">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
          <ArrowLeft size={20} /> Back
        </button>
        <div className="flex items-center gap-2 font-bold text-blue-600">
          <TrendingUp size={24} /> <span>US Stock Tracker</span>
        </div>
      </div>

     
      <div className="w-full max-w-2xl flex flex-col gap-8 mt-20">
        
       
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
          <SearchBar 
            onSearch={(newSymbol) => navigate(`/stock/${newSymbol.toUpperCase()}`)} 
            placeholder="Search for another stock symbol..."
          />
        </div>

        
        <div className="w-full">
          {loading ? (
            <div className="bg-white rounded-3xl p-12 flex flex-col items-center shadow-md">
              <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
              <p className="text-slate-500">Updating {symbol} data...</p>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <StockCard stock={stock} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}