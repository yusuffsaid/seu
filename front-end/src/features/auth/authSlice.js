import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoading: true,
  allUser: [],
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (information) => {
    const user = await axios.post("/api/auth/register", information);
    console.log(user);
    return user.data;
  }
);
export const loginUser = createAsyncThunk("auth/login", async (information) => {
  const user = await axios.post("/api/auth/login", information);
  return user.data;
});

export const allUsers = createAsyncThunk("user/all", async () => {
  const user = await axios.get("/api/auth/alluser");

  return user.data.user;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      state.isLoading = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      state.isLoading = false;
    },
    [allUsers.fulfilled]: (state, action) => {
      state.allUser = action.payload;
    },
  },
});

export const { setCurrentUser, logoutUser } = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;
