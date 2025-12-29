import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StockDetails from "./pages/StockDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
