import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_ITICK_BASE_URL,
  headers: {
    accept: "application/json",
  },
  params: {
    apikey: import.meta.env.VITE_ITICK_TOKEN,
  },
});

export default api;
