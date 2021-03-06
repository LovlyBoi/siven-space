let BASE_URL: string, TIME_OUT: number

if (process.env.NODE_ENV === 'development') {
  // 开发版本 baseURL
  BASE_URL = '/api'
  TIME_OUT = 200000
} else if (process.env.NODE_ENV === 'production') {
  // 生产版本 baseURL
  BASE_URL = 'http://123.57.238.32:10086'
  TIME_OUT = 200000
}

export { BASE_URL, TIME_OUT }
