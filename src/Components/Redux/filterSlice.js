import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visibleItems: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterItem: (state, action) => {
      state.visibleItems = action.payload
    },
  },
})

export const { filterItem, changeTitleButton } = filterSlice.actions

export default filterSlice.reducer
