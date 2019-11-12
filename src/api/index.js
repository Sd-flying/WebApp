import request from '@/utils/request'

//登录
//post请求参数放在data里面，get请求参数放在params里面
export function Login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

//登出
export function Logout () {
  console.log('api进去。。')
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
