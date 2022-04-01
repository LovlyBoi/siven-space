export function setCache(key: string, data: any) {
  window.localStorage.setItem(key, JSON.stringify(data))
}

export function getCache(key: string) {
  return JSON.parse(window.localStorage.getItem(key) as string)
}
