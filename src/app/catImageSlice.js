import { createSlice } from "@reduxjs/toolkit";

const catImageSlice = createSlice({
  name: "catImage",
  initialState: {
    catImageUrl: null,
    catImageCount: 0,
  },
  reducers: {
    fetchRandomCatImage: (state, action) => {
      state.catImageUrl = action.payload.catImageUrl;
      state.catImageCount += 1;
    },
  },
});

export const { fetchRandomCatImage } = catImageSlice.actions;
export default catImageSlice.reducer;
