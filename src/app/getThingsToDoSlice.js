import { createSlice } from "@reduxjs/toolkit";

export const boredPhraseSlice = createSlice({
    name: "boredPhrase",
    initialState: {
        phrase: "Activity will appear here."
    },
    reducers: {
        showPreviousPhrase: (state, action) => {
            state.value = action.payload;
        },
        showNextPhrase: (state, action) => {
            
            state.value = action.payload;
        },

    }
});

export const { savePreviousPhrase, showNextPhrase } = boredPhraseSlice.actions;

export default boredPhraseSlice.reducer;