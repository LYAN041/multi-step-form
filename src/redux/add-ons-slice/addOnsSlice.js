import { createSlice } from '@reduxjs/toolkit'

export const addOnsSlice = createSlice({
  name: 'add-ons',
  initialState: {
    services: [],
  },
  reducers: {
    addService: (state, action) => {
      state.services = action.payload
    },
  },
})

export const { addService } = addOnsSlice.actions

export default addOnsSlice.reducer