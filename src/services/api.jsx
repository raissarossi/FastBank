import axios from "axios";

const api = axios.create({
  baseURL: "https://rai-fastbank.azurewebsites.net/",
});

export default api;
