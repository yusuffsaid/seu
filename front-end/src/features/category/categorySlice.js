import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [false],
};

export const getAllCategory = createAsyncThunk("category/getall", async () => {
  const categories = await axios("/api/category/all");
  return categories.data.categories;
});

export const createCategory = createAsyncThunk(
  "category/create",
  async (info) => {
    const category = await axios.post("/api/category/create", info);
    return category.data.category;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async ({ id, index }) => {
    await axios.delete("/api/category/delete/" + id);

    return index;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getAllCategory.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.categories.push(action.payload);
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.categories.splice(action.payload, 1);
    },
  },
});

export const categoryState = (state) => state.category;

export default categorySlice.reducer;
