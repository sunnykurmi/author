import axios from "axios";

const instance = axios.create({
  baseURL: "https://freetestapi.com/api/v1/books",
  withCredentials: true,
});

export default instance;
