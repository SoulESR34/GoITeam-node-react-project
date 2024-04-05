import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signupThunk } from "./operations";

export const initialState = {
  user: { name: null, email: null },
  isLogged: false,
  isLoading: false,
  error: null,
};

export const handlePending = (state) => {
  state.isLoading = true
};

export const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

export const handleFullfied = (state, action) => {
  const {name, email} = action.payload.user
  state.user = { name, email }
  state.isLogged = true
  state.isLoading = false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(loginThunk.pending, (state) => handlePending(state))
    .addCase(loginThunk.fulfilled, (state) => handleRejected(state, action))
    .addCase(loginThunk.rejected, (state) => handleFullfied(state, action))

    .addCase(signupThunk.pending, (state) => handlePending(state))
    .addCase(signupThunk.fulfilled, (state) => handleRejected(state, action))
    .addCase(signupThunk.rejected, (state) => handleFullfied(state, action))
  },
});



export const authReducer = authSlice.reducer;
