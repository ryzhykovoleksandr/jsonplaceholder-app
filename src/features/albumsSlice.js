import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbumsByUserId } from "../api/jsonplaceholder";

export const fetchAlbumsByUserId = createAsyncThunk(
  "albums/fetchAlbumsByUserId",
  async (userId) => {
    const response = await getAlbumsByUserId(userId);
    return response.data;
  }
);

const albumsSlice = createSlice({
  name: "albums",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsByUserId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default albumsSlice.reducer;
