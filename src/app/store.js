import { configureStore } from '@reduxjs/toolkit';

import boredPhraseReducer from './getThingsToDoSlice';
import catImageReducer from "./catImageSlice.js";
export default configureStore({
  reducer: {
    boredPhrase: boredPhraseReducer,
    catImage: catImageReducer,

  },
});
