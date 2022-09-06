import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const getFurnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    getFurniture: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { getFurniture } = getFurnitureSlice.actions

export default getFurnitureSlice.reducer
