import { configureStore } from "@reduxjs/toolkit";
import { switchReducer } from "../reducers/switchSlice";
import { markdownReducer } from "../reducers/markdownSlice";

export const store = configureStore({
  reducer: {
    markdown: markdownReducer,
    switch: switchReducer,
  }
});