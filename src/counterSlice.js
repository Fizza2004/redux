import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterValue: 0},
  reducers: {
    increment(state,action){
      state.counterValue +=1;
    },
    decrement(state,action){
      state.counterValue -=1;
    },
    reset(state,action){
      state.counterValue = 0;
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer