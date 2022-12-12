import { createSlice } from '@reduxjs/toolkit'

export const planSlice = createSlice({
  name: 'plan',
  initialState: {
    name: '',
    date: '',
    price: ''
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload
    },

    addDate: (state, action) => {
      state.date = action.payload
    },
    addPrice: (state, action) => {
      state.price = action.payload
    },
  },
})

export const { addName, addDate, addPrice } = planSlice.actions

export const selectPlan = (state) => state.name

export default planSlice.reducer