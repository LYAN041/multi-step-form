import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'add-ons',
  initialState: {
    count: 0,
  },
  reducers: {
    addCounter: (state, action) => {
      state.count += action.payload
    },
  },
})

export const { addCounter } = counterSlice.actions

export default counterSlice.reducer