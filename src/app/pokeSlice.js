import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
    name: "poke",
    initialState: {
        foundPokeCount: 0,
    },
    reducers: {
        incrementFoundPokeCount: (state, action) => {
            state.foundPokeCount += 1;
        },
    },
});

export const { incrementFoundPokeCount } = pokeSlice.actions;
export default pokeSlice.reducer;