import Axios from "axios";

export const api = Axios.create({
  baseURL: "http://localhost:8000/api/",
});
