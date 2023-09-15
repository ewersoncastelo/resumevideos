import axios from "axios";

const api = axios.create({
  baseURL: "http://localgost:3333",
});

export default api;
