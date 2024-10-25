import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movieSlice";


export const movieStore = configureStore({
    reducer: {
        movieData: movieReducer,
    }
});

