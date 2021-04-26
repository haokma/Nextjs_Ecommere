import { URL_API } from '../constants'
import axiosClient from '../helpers/axiosClient'
export const categoriesApi = {
  getAllCategories: async () => {
    const url = `${URL_API}/category`
    return axiosClient.get(url)
  }
}