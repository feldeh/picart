import axios from "axios";

const sh = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  withCredentials: true,
//   xsrfCookieName: "CSRF-TOKEN",
//   xsrfHeaderName: "X-CSRF-TOKEN",
  headers: {
    Accept: "application/json",
  },
});

export default sh;