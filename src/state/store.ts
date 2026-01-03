// import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// import {rootReducer} from './reducers';

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk, logger],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./reducers";

// создаём store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger as unknown as any), // ⚡ принудительно приводим тип
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
