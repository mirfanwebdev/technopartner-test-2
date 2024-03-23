import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const profileHome = createAsyncThunk("profile/home", async () => {
  try {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(`https://soal.staging.id/api/home`, config);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.result;
      })
      .addCase(profileHome.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
