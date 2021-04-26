import { ADD_TO_CART_SUCCESS, CLEAR_CART_SUCCESS, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_SUCCESS, UPDATE_CART_SUCCESS } from "../../constants/cartConstants";
import Cookie from 'js-cookie'
const initialValue = {
  result: Cookie.get('result') || null,
  cartItems: [],
  totalPrice: null,
  id: null
}


export const cartReducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cart,
        result: payload.result,
        totalPrice: payload.totalPrice,
        id: payload.id
      }
      Cookie.set('result', JSON.stringify(payload.result))
      return cart
    }
    case GET_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cart,
        result: payload.result,
        totalPrice: payload.totalPrice,
        id: payload.id
      }
      Cookie.set('result', JSON.stringify(payload.result))
      return cart
    }
    case GET_CART_FAIL: {
      Cookie.remove('result')
      return { ...state, cartItems: [], result: null, totalPrice: null }
    }
    case DELETE_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cartItems,
        result: payload.result,
        totalPrice: payload.totalPrice
      }
      Cookie.set('result', JSON.stringify(payload.result))
      return cart
    }
    case UPDATE_CART_SUCCESS: {
      return { ...state, cartItems: payload.cartItems, totalPrice: payload.totalPrice }
    }
    case CLEAR_CART_SUCCESS: {
      Cookie.remove('result')
      return { ...state, cartItems: [], result: null, totalPrice: null }
    }
    default:
      return state;
  }
}
export default cartReducer