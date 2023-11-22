import { configureStore } from '@reduxjs/toolkit';

import boredPhraseReducer from './getThingsToDoSlice';
import catImageReducer from "./catImageSlice.js";
import animeHistoryReducer from "./jikanSlice.js";
import pokeReducer from "./pokeSlice.js";


export default configureStore({
  reducer: {
    boredPhrase: boredPhraseReducer,
    catImage: catImageReducer,
    animeHistory: animeHistoryReducer,
    poke: pokeReducer,
  },
});
