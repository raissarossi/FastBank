import axios from "axios";

const api = axios.create({
  baseURL: "https://fastbank-rai.azurewebsites.net/",
});

export default api;