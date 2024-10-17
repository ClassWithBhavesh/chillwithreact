import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        INCREMENT: (state) => {
            state.value += 1
        },
        DECREMENT: (state) => {
            state.value -= 1
        },
        RESET: (state) => {
            state.value = 0
        },
        increByMultipleValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {INCREMENT, DECREMENT, RESET, increByMultipleValue} = counterSlice.actions;

export default counterSlice.reducer;

