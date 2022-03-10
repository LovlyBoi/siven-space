import axios from 'axios'
import { BASE_URL } from './config'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { createToaster } from '@meforma/vue-toaster'

const toast = createToaster({
  position: 'top-right',
  duration: 2000,
})

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
        toast.warning('好像出问题了诶！乂(ﾟДﾟ三ﾟДﾟ)乂 ')
        return error
      }
    )
  }
}

export default new Request({
  baseURL: BASE_URL,
}).instance
