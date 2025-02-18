import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.value = true;
    },
    closeSidebar: (state) => {
      state.value = false;
    },
  },
});

export const { showSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
