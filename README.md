# 📈 Stock Price Tracker (React + Vite)

A web application built with **React + Vite** that allows users to search and track stock prices in near real-time using a Time Series stock API.

---

## 🚀 Features

- 🔍 Search for any stock by its symbol (e.g. AAPL, TSLA)
- ⏱️ Displays latest price using 1-minute interval data
- 📊 Shows Open, High, Low, Close, and Volume
- 🧩 Clean, component-based architecture
- ⚡ Fast performance powered by Vite
- 🌍 Supports global stock markets (NASDAQ, NYSE, etc.)

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Axios**
- **React Router DOM**
- **External Stock Market API**

---

## 📂 Project Structure

```text
src/
├── api/
│   ├── api.js               # Axios instance (baseURL, token, headers)
│   └── stock.service.js     # Stock API service (business logic)
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   └── StockCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── StockDetails.jsx
│
├── assets/
│   └── stock-hero.png
│
├── App.jsx
├── main.jsx
└── index.css
