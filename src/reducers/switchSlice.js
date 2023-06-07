import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switch",
  initialState: {
    editorOpen: true,
    previewerOpen: true,
  },
  reducers: {
    editorSwitch: (state) => {
      state.editorOpen = !state.editorOpen;
    },
    previewerSwitch: (state) => {
      state.previewerOpen = !state.previewerOpen;
    },
  }
});

export const { editorSwitch, previewerSwitch } = switchSlice.actions;
export const switchReducer = switchSlice.reducer;