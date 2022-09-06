import { configureStore } from '@reduxjs/toolkit'
import furniture from './getDataSlice'
import cart from './cartSlice'
import filter from './filterSlice'

export default configureStore({
  reducer: {
    furniture,
    cart,
    filter,
  },
})
