import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  type: null,
  isInternetReachable: false,
};

const netSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setStatus: (
      state,
      action: {
        payload: {
          isConnected: boolean;
          type: any;
          isInternetReachable: boolean;
        };
      }
    ) => {
      state.isConnected = action.payload.isConnected;
      state.type = action.payload.type;
      state.isInternetReachable = action.payload.isInternetReachable;
    },
  },
});

export const { setStatus } = netSlice.actions;

export default netSlice.reducer;
