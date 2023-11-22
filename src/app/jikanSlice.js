import { createSlice } from "@reduxjs/toolkit";

export const jikanSlice = createSlice({
    name: "animeHistory",
    initialState: {
        currentAnime: {data: {title: "Anime Randomizer", synopsis: "Synopsis will appear here."}},
        log : [],
    },
    reducers: {
        setCurrentAnime: (state, action) => {
            state.currentAnime = action.payload;
            state.log.push(action.payload);
        }
    }
});

export const { setCurrentAnime } = jikanSlice.actions;
export default jikanSlice.reducer;