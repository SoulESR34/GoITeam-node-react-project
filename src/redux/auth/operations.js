import { createAsyncThunk } from "@reduxjs/toolkit";
const { VITE_SERVER_URL } = import.meta.env;

export const requestAuth = async (handleError, body, endpoint) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      Headers: { "Content-type": "application/json" },
    };
    const res = await fetch(VITE_SERVER_URL + endpoint, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    handleError(error.message);
  }
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thinkAPI) => {
    return await requestAuth(thinkAPI.rejectWithValue, credentials, "/login");
  }
);

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, thinkAPI) => {
    return await requestAuth(thinkAPI.rejectWithValue, credentials, "/register");
  }
);

