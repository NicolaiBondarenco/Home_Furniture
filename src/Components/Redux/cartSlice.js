import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: [],
  maxPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.item.find((item) => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.item.push({
          ...action.payload,
          count: 1,
        })
      }
    },
    counter: (state) => {
      state.maxPrice = state.item.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    countIncrement: (state, action) => {
      const findItem = state.item.find((el) => el.id === action.payload)
      if (findItem) {
        findItem.count++
      }
      state.maxPrice += findItem.price
    },
    countDecrement: (state, action) => {
      const findItem = state.item.find((el) => el.id === action.payload)
      console.log(findItem)
      if (findItem) {
        findItem.count--
      }
      state.maxPrice -= findItem.price
    },
    removeItem: (state, action) => {
      const findItem = state.item.find((el) => el.id === action.payload)
      if (findItem) {
        state.item = state.item.filter((el) => el.id !== action.payload)
        state.maxPrice -= findItem.price * findItem.count
      }
    },
    removeArrayItems: (state) => {
      state.item = []
      state.maxPrice = 0
    },
  },
})

export const {
  addItem,
  counter,
  countIncrement,
  countDecrement,
  removeItem,
  removeArrayItems,
} = cartSlice.actions

export default cartSlice.reducer
