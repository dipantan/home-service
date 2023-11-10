import { Slice, createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../../interfaces";

const initialState: Auth = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  type: "",
  token: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
  firstTime: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
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
    logout: (state, action) => {
      state.isLoading = true;
    },
    logoutSuccess: (state, action) => {
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
    clearError: (state, action) => {
      state.error = null;
    },
    setFirstTime: (state, action) => {
      state.firstTime = action.payload;
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
  setFirstTime,
} = authSlice.actions;

export default authSlice.reducer;
