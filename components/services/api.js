import axios from "axios";

const api = axios.create({
  baseURL: "http://rai-fastbank.azurewebsites.net/",
});

export default api;