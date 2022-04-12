export function setCache(key: string, data: any) {
  return window.localStorage.setItem(key, JSON.stringify(data))
}

export function getCache(key: string) {
  let result
  try {
    result = JSON.parse(window.localStorage.getItem(key) as string)
  } catch (e) {
    console.warn(e)
    result = undefined
  }
  return result
}
