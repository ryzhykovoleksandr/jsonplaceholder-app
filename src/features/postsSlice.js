import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsByUserId } from "../api/jsonplaceholder";

export const fetchPostsByUserId = createAsyncThunk(
  "posts/fetchPostsByUserId",
  async (userId) => {
    const response = await getPostsByUserId(userId);
    return response.data;
  } 
);

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsByUserId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postsSlice.reducer;
