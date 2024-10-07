// src/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { setAuthHeader } from "../../api/api"; // Import the Axios instance

// Register User Thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register", userData);
      const { user, accessToken, refreshToken } = response.data;
      setAuthHeader(accessToken); // Set auth header
      localStorage.setItem("accessToken", accessToken); // Store the access token
      localStorage.setItem("refreshToken", refreshToken); // Store the refresh token
      return { user, accessToken, refreshToken };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login User Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", credentials);
      const { user, accessToken, refreshToken } = response.data;
      setAuthHeader(accessToken); // Set auth header
      localStorage.setItem("accessToken", accessToken); // Store the access token
      localStorage.setItem("refreshToken", refreshToken); // Store the refresh token
      return { user, accessToken, refreshToken };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Logout User Thunk
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Refresh Access Token Thunk
export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, { getState, rejectWithValue }) => {
    const { refreshToken } = getState().auth;
    if (!refreshToken) return rejectWithValue("No refresh token available");

    try {
      const response = await api.post("/auth/refresh-token", { refreshToken });
      const { accessToken } = response.data;
      setAuthHeader(accessToken); // Update the authorization header
      localStorage.setItem("accessToken", accessToken); // Store the new access token
      return accessToken;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  user: null,
  refreshToken: null,
  accessToken: null,
  loading: false,
  error: null,
};

// Create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    clearAuth: (state) => {
      state.user = null;
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout user
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.refreshToken = null;
        state.accessToken = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Refresh access token
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload; // Update access token
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error if token refresh fails
      });
  },
});

export const { resetError, clearAuth } = authSlice.actions;
export default authSlice.reducer;
