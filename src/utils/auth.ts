import { getCache } from '@/utils/cache'
export function authTokenExist() {
  const token = getCache('token')
  return !!token
}

export function verifyToken() {
  const token = getCache('token')
  // 发送到服务器校验
}
