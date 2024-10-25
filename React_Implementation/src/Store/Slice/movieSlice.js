import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    movieData: null,
    isError: false
};

export const fetchMovie = createAsyncThunk("fetchMovie", async () => {
    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJmY2U5MDA3MzJhOWVjMjVhZTNhZTYwNDI3YTg3ZiIsIm5iZiI6MTcyOTc2MzE1MS45MDQ2MDMsInN1YiI6IjY3MTlmZjRkNDU0MmUzNzFmZTBhNGExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qbcUHaB08vKAYjycD8iy3q2SZsBbkrQBja5Mfr1b41g";
    const API_URL = "https://api.themoviedb.org/3/discover/movie";
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        }
    }
    const response = await fetch(API_URL, options);
    return response.json();
});

export const movieslice = createSlice({
    name: "movieData",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state, action) => {
            state.isLoading = true;
            state.movieData = action.payload;
        });
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoading = false,
            state.movieData = action.payload;
        })
        builder.addCase(fetchMovie.rejected, (state, action) => {
            state.isError = true;
            console.log("Error while fetching data : ", action.payload);
        })
    }
})

export default movieslice.reducer;