import { Slice, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  type: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice: Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.type = action.payload.type;
      state.token = action.payload.token;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.type = null;
      state.token = null;
    },
    logoutFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
  logoutFailed,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
