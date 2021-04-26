
import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import productReducer from './productReducer'
const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  order: orderReducer,
  products: productReducer
})

export default rootReducer