import Cookies from 'js-cookie'

const TokenKey = 'x-token'

//获取Token(令牌)
export function getToken () {
  return Cookies.get(TokenKey)
}

//设置token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

//删除Token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
