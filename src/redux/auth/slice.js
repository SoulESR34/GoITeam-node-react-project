import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true
};

const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

const handleFullfied = (state, action) => {
  const {name, email} = action.payload.user
  state.user = { name, email }
  state.token = payload.accessToken
  state.isLogged = true
  state.isLoading = false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(loginThunk.pending, (state) => handlePending())
    .addCase(loginThunk.fulfilled, (state) => handleRejected())
    .addCase(loginThunk.rejected, (state) => handleFullfied())
  },
});

export const authReducer = authSlice.reducer;
