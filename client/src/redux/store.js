import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./authSlice"; // Import your auth slice

// Configure persist for the auth slice
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"], // Only persist user and token
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist uses non-serializable data, so disable this check
    }),
});

export const persistor = persistStore(store);
export default store;
