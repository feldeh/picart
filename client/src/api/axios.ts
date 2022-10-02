import axios from "axios"

// axios instance
export default axios.create({
  // axios config
  baseURL: "http://localhost:8080",
  timeout: 5000,
  withCredentials: false,
  xsrfCookieName: "CSRF-TOKEN",
  xsrfHeaderName: "X-CSRF-TOKEN",
  headers: {
    Accept: "application/json",
  },
});

