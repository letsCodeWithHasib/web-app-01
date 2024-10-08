// src/api.js
import axios from "axios";

const API_BASE_PATH = "/";

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_PATH,
});

// Function to set the authorization header
export const setAuthHeader = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Request interceptor to add the auth header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Or use your preferred storage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired access token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh the access token
      const refreshToken = localStorage.getItem("refreshToken"); // Get refresh token from storage
      if (refreshToken) {
        try {
          const response = await api.post("/auth/refresh-token", {
            refreshToken,
          });
          const { accessToken } = response.data;
          setAuthHeader(accessToken); // Update the authorization header
          localStorage.setItem("accessToken", accessToken); // Store the new access token
          return api(originalRequest); // Retry the original request
        } catch (err) {
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
