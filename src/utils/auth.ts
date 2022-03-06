export function authTokenExist() {
  const token = window.localStorage.getItem('token')
  return !!token
}