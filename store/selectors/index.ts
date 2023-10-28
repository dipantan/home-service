import { RootState } from "..";
import { User } from "../../interfaces";

// auth
const getUser = (state: RootState) => state.auth.user;
const getToken = (state: RootState) => state.auth.token;
const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
const getIsLoading = (state: RootState) => state.auth.isLoading;
const getError = (state: RootState) => state.auth.error;
const firstTime = (state: RootState) => state.auth.firstTime;

// net
const getIsNetConnected = (state: RootState) => state.network.isConnected;
const getNetType = (state: RootState) => state.network.type;

export {
  getUser,
  getToken,
  getIsAuthenticated,
  getIsLoading,
  getError,
  firstTime,
  getIsNetConnected,
  getNetType,
};
