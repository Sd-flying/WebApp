import Mock from 'mockjs'
import loginAPI from './login'

//登录相关的
Mock.mock(/\/user\/login/, 'post', loginAPI.login)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)

