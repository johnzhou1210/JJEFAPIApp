import { configureStore } from '@reduxjs/toolkit';
import catImageReducer from "./catImageSlice.js";
export default configureStore({
  reducer: {
    catImage: catImageReducer,
  },
});
