import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import tasksReducer from "../redux/tasks/slice";
import { authReducer } from "./auth/slice";


const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const tasksPersistConfig = {
  key: "tasks",
  storage,
  whitelist: ["items"], 
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPeristConfig, authReducer),
    tasks: persistReducer(tasksPersistConfig, tasksReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
