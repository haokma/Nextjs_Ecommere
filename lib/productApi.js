import { URL_API } from "../constants"
import axiosClient from "../helpers/axiosClient"


const productApi = {
  getProdustInitial: async () => {
    const url = `${URL_API}/products/initial-data`
    const res = await axiosClient.get(url)
    return res
  },
  getProductCategorySlug: async (url) => {
    const res = await axiosClient.get(url)
    return res
  },
  getProductSlug: async (slug) => {
    const url = `${URL_API}/products/detail/${slug}`
    const res = await axiosClient.get(url)
    return res
  }
}
export default productApi