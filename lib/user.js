import { URL_API } from "../constants"
import axiosClient from "../helpers/axiosClient"


const userAPi = {
  login: async (user) => {
    const url = `${URL_API}/user/login`
    const res = await axiosClient.post(url, user)
    return res
  },
  signup: (user) => {
    const url = `${URL_API}/user/signup`
    const res = axiosClient.post(url, user)
    return res
  },
}
export default userAPi