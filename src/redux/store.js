import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const Rootreducer = combineReducers({
  sidebar: sidebarReducer,
});
const persistedReducer = persistReducer(persistConfig, Rootreducer);

export const store = configureStore({
  reducer: persistedReducer,
});
