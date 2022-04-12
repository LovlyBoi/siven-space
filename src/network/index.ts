import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { BASE_URL } from './config'
import { getCache } from '@/utils/cache'
import toast from '@/utils/toast'

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use((config) => {
      const token = getCache('token') || ''
      config.headers ??= {}
      config.headers.Authorization = token
      // console.log(token)
      return config
    })
    this.instance.interceptors.response.use(
      (responce) => {
        const { data } = responce
        return data
      },
      (error) => {
        console.warn(error)
        // 在这提示请求失败
        toast.warning('好像代码出问题了诶！乂(ﾟДﾟ三ﾟДﾟ)乂 ')
        return error
      }
    )
  }
}

export interface Responce {
  code: number
  data: any
  msg: string
}

export default new Request({
  baseURL: BASE_URL,
}).instance
