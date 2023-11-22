import { createSlice } from "@reduxjs/toolkit";

export const boredPhraseSlice = createSlice({
    name: "boredPhrase",
    initialState: {
        phrase: "Activity will appear here."
    },
    reducers: {
        showNextPhrase: (state, action) => {
            state.phrase = action.payload.activity;
        },
    }
});

export const { showNextPhrase } = boredPhraseSlice.actions;

export default boredPhraseSlice.reducer;