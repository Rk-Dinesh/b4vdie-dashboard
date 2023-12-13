//needed

import { createSlice } from "@reduxjs/toolkit";

const storedUserData = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUserData || { name: "", token: "" }, 
    isAuth: !!storedUserData,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logOut: (state, action) => {
      state.user = { name: "", token: "" }; 
      state.isAuth = false; 
    },
    
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
