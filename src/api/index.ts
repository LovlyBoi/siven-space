import request from '@/network'

export function getAllCards() {
  return request({
    url: '/getAllCards',
    method: 'GET'
  })
}

export function getAllEssays() {
  return request({
    url: '/getAllEssays',
    method: 'GET'
  })
}
