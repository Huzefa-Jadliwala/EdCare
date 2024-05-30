import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
    signUpStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    signUpFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
    deleteStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpStart,
  signUpFailure,
  updateStart,
  updateFailure,
  updateSuccess,
  deleteFailure,
  deleteStart,
  deleteSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
