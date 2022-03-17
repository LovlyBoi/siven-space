import request from '@/network'

export interface UserInfo {
  username: string
  password: string
}

export function login(userInfo: UserInfo) {
  return request({
    method: 'POST',
    url: '/login',
    data: userInfo
  })
}
