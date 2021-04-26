import axios from 'axios'
import Cookies from 'js-cookie';
import queryString from 'query-string'
const axiosClient = axios.create({
  baseURL: '',
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
  const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

axiosClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  throw error;
});

export default axiosClient