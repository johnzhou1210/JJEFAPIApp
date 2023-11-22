import { configureStore } from '@reduxjs/toolkit';
import boredPhraseReducer from './getThingsToDoSlice';

export default configureStore({
  reducer: {
    boredPhrase: boredPhraseReducer,
  },
});