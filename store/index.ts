import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createLogicMiddleware } from "redux-logic";

// slices
import authReducer from "./slices/auth";

// logics
import { loginLogic, logoutLogic } from "./slices/auth/logic";

const RootReducer = combineReducers({
  auth: authReducer, // add auth reducer
});

const persistConfig = {
  key: "root", // key is required
  storage: AsyncStorage, // AsyncStorage as storage
  whitelist: ["auth", "notification"], // which reducer want to persist
};

// const logicDependencies = {
//   baseURLDev: baseUrlDev,
// }; // optional, for logic only

const logicArray = [loginLogic, logoutLogic]; // optional, for logic only

const logicMiddleware = createLogicMiddleware(logicArray); // optional, for logic only

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
