import api from "./api";

export const getStockTimeSeries = async (symbol) => {
  try {
    // التغيير هنا: time_series بدلاً من time-series
    const response = await api.get("/time_series", {
      params: {
        symbol: symbol,
        interval: "1min",
        outputsize: "2", // نحتاج عنصرين فقط لحساب التغيير
      },
    });

    if (response.data.status === "error" || !response.data.values) {
      throw new Error(response.data.message || "Stock not found");
    }

    const { meta, values } = response.data;
    
    const currentPrice = parseFloat(values[0].close);
    const previousPrice = parseFloat(values[1].close); 
    const change = currentPrice - previousPrice;
    const changePercent = ((change / previousPrice) * 100).toFixed(2);

    return {
      symbol: meta.symbol,
      exchange: meta.exchange,
      currency: meta.currency,
      latest: values[0],
      change: change.toFixed(2),
      changePercent: changePercent, // سنستخدم هذا في البطاقة
      history: values,
    };
  } catch (error) {
    console.error("API Error Details:", error);
    throw error;
  }
};