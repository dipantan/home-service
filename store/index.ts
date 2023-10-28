import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createLogicMiddleware } from "redux-logic";

// slices
import authReducer from "./slices/auth";
import netReducer from "./slices/network";

// logics
import { loginLogic, logoutLogic } from "./slices/auth/logic";
import { instance } from "../helper";

const RootReducer = combineReducers({
  auth: authReducer, // add auth reducer
  network: netReducer, // add net reducer
});

const persistConfig = {
  key: "root", // key is required
  storage: AsyncStorage, // AsyncStorage as storage
  whitelist: ["auth"], // which reducer want to persist
};

const logicArray = [loginLogic, logoutLogic]; // optional, for logic only

const logicDependencies = { instance };

const logicMiddleware = createLogicMiddleware(logicArray, logicDependencies); // optional, for logic only

const persistedReducer = persistReducer(persistConfig, RootReducer); // create a persisted reducer

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logicMiddleware),
});

store.subscribe(() => {
  // console.log(JSON.stringify(store.getState(), null, 2));
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
