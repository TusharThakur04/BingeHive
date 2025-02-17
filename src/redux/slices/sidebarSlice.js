import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
