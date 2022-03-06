import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.response.use(
      (responce) => {
        const { data } = responce
        return data
      },
      (error) => {
        console.warn(error)
        // 在这提示请求失败
        return error
      }
    )
  }
}

export default new Request({
  // baseURL
}).instance
