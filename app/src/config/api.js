import axios from "axios";

// create base url
export const API_BASE = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const setAuthToken = (token) => {
  if (token) {
    API_BASE.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("auth");
  } else {
    delete API_BASE.defaults.headers.common["Authorization"];
  }
};
