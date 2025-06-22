import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  count: number;
  firstName: string;
}

const initialState: StateType = {
  count: 0,
  firstName: "Rohit",
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
