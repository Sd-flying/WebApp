import axios from 'axios'
import {Loading, Message} from 'element-ui'
import {getToken} from '@/utils/auth'
import {removeToken} from './auth'

const BASE_API = 'http://127.0.0.1:3000'

let loading//定义Loading变量

function startLoading () { //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中。。。',
    background: 'rgba(0,0,0,0.7)'
  })
}

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

function endLoading () { //使用Element loading-close方法
  loading.close()
}

//创建axios实例
const service = axios.create({
  baseURL: BASE_API,//api的base_url
  withCredentials: true,
  timeout: 60 * 1000  //请求超时时间
})

//request拦截
service.interceptors.request.use(
  config => {
    console.log('我进到拦截器啦。。。')
    console.log(config)
    config.headers = {
      'Content-Type': 'application/json'
    }
    //每次请求都给头设置token，用于验证
    if (getToken()) {
      config.headers['x-token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.loading) {
      showFullScreenLoading()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

//response拦截器
service.interceptors.response.use(
  response => {
    console.log('进入到了响应拦截器啦。。')
    console.log(response.data)
    tryHideFullScreenLoading()
    // const jsonResult = response.data;
    // if (!jsonResult.success) {
//     if (jsonResult.statusCode === '50008' || jsonResult.statusCode === '50012' || jsonResult.statusCode === '50014') {
//       MessageBox.confirm(
//         '你已被登出，可以取消继续留在该页面，或者重新登录',
//         '确定登出',
//         {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }
//       ).then(() => {
//         store.dispatch('FedLogOut').then(() => {
//           location.reload() // 为了重新实例化vue-router对象 避免bug
//         })
//       })
//     }
//     return Promise.reject(jsonResult);
//   } else {
//   return jsonResult;
// }
    return response
    // const jsonResult = response.data;
    // if (!jsonResult.success) {
    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (jsonResult.statusCode === '50008' || jsonResult.statusCode === '50012' || jsonResult.statusCode === '50014') {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出',
    //       {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       // store.dispatch('FedLogOut').then(() => {
    //       //   location.reload() // 为了重新实例化vue-router对象 避免bug
    //       // })
    //     })
    //   }
    //   return Promise.reject(jsonResult)
    // } else {
    //   return jsonResult
    // }
  },
  err => {
    //响应错误处理
    // console.log('error')
    // console.log(error)
    // console.log(JSON.stringify(error))

    // this.$store.commit('SET_TOKEN', '')
    // let text = JSON.parse(JSON.stringify(error)).response.status === 404
    //   ? '404'
    //   : '网络异常，请重试'
    // app.$vux.toast.show({
    //   type: 'warn',
    //   text: text
    // })
    console.log('进入到错误响应页面。。')
    let errMsg = ''
    if (err && err.response.status) {
      switch (err.response.status) {
        case 20001:
          errMsg = '登录状态失效，请重新登录'
          removeToken()
          this.$router.push('/login')
          break
        case 500:
          errMsg = '服务器内部错误'
          break

        case 501:
          errMsg = '服务未实现'
          break

        case 502:
          errMsg = '网关错误'
          break

        case 503:
          errMsg = '服务不可用'
          break

        case 504:
          errMsg = '网关超时'
          break
        default:
          errMsg = err.response.data.msg
          break
      }
    } else {
      errMsg = err
    }

    Message.error(errMsg)
    return Promise.reject(errMsg)
  }
)
export default service
