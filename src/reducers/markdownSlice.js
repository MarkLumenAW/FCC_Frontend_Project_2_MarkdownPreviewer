import { createSlice } from "@reduxjs/toolkit";
import { sampleMarkdown } from "../assets/sampleMarkdown.js";

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    content: sampleMarkdown,
  },
  reducers: {
    updateMarkdown: (state, action) => {
      state.content = action.payload.content;
    }
  }
});

export const { updateMarkdown } = markdownSlice.actions;
export const markdownReducer = markdownSlice.reducer;