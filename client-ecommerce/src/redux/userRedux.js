import { createSlice } from "@reduxjs/toolkit";
//  REQUEST API CALLS FOR CURRENT USER
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, registerSuccess } = userSlice.actions;
export default userSlice.reducer;