import { categoriesApi } from "../../lib/categories"
import { message } from 'antd'
import { GET_CATGORY_FAIL, GET_CATGORY_REQUEST, GET_CATGORY_SUCCESS } from "../../constants/categoriesConstants"


export const actionGetAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CATGORY_REQUEST })
    try {
      const res = await categoriesApi.getAllCategories()
      const { categories } = res.data
      dispatch({ type: GET_CATGORY_SUCCESS, payload: categories })
      return res
    }
    catch (err) {
      const { data } = err.response.data.message
      dispatch({ type: GET_CATGORY_FAIL })
      message.error(data)
    }
  }
}