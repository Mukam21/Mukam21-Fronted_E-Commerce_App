// import { combineReducers } from "redux";
// import userReducer from "./userSlice";
// import productReducer from "./productSlice";

// export const rootReducer = combineReducers({ userReducer, productReducer });


import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";

export const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

export type RootReducer = typeof rootReducer;
