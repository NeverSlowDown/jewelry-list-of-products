import { configureStore } from '@reduxjs/toolkit'
import productList from '../components/ProductList/ProductListSlice'

export default configureStore({
  reducer: {
    products: productList
  }
})
