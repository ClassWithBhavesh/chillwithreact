import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice"

export const counterStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

