import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authLogin = createAsyncThunk("auth/login", async (payload) => {
  try {
    const res = await axios.post(
      "https://soal.staging.id/oauth/token",
      payload
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

const initialState = {
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        const token = action.payload.access_token;
        state.isLoading = false;
        localStorage.setItem("access_token", token);
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
