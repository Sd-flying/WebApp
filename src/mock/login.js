export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export default {
  //登录
  login: config => {
    console.log(config)
    let info = JSON.parse(config.body)
    if (info.username == 'admin' && info.password == 'admin') {
      return {
        success: '登录成功',
        code: 200
      }
    } else {
      return {
        success: '用户名或密码错误',
        code: 401
      }
    }
  },

  //前端登出
  logout: config => {
    console.log(config)
    console.log('前端登出。。')
    return {
      success: '请登录',
      code: 200
    }
  }
}
