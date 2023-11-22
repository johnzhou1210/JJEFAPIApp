import { createSlice } from "@reduxjs/toolkit";

export const boredPhraseSlice = createSlice({
    name: "boredPhrase",
    initialState: {
        phrase: "Activity will appear here.",
        phrases: [],
    },
    reducers: {
        showNextPhrase: (state, action) => {
            state.phrase = action.payload.activity;
            console.log(state.phrase);
        },
        showPreviousPhrases: (state, action) => {
            if (state.phrase !== "Activity will appear here.") {
                state.phrases.push(action.payload);
            }
        },
    }
});

export const { showNextPhrase, showPreviousPhrases } = boredPhraseSlice.actions;

export default boredPhraseSlice.reducer;