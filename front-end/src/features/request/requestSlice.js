import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  request: [],
};

export const createRequest = createAsyncThunk(
  "request/create",
  async (information) => {
    const request = await axios.post("/api/request/create", information);

    return request.data;
  }
);
export const getAllRequest = createAsyncThunk(
  "request/allrequest",
  async () => {
    const request = await axios("/api/request/allrequest");

    return request.data.request;
  }
);

export const updateStatus = createAsyncThunk(
  "request/updatestatus",
  async ({ id, status }) => {
    await axios.get("/api/request/updatestatus/" + id + "?status=" + status);

    return id;
  }
);

const requestSlice = createSlice({
  name: "request",
  initialState,
  extraReducers: {
    [createRequest.fulfilled]: (state, action) => {
      state.request.push(action.payload.request);
    },
    [getAllRequest.fulfilled]: (state, action) => {
      state.request = action.payload;
    },
  },
});

export const requestState = (state) => state.request;

export default requestSlice.reducer;
