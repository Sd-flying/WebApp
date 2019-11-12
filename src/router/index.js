import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Cate from '@/views/cate.vue'
import Cart from '@/views/user/cart.vue'
import Me from '@/views/user/me.vue'
import Search from '@/views/search.vue'
import Detail from '@/views/detail.vue'
import Myaddress from '@/views/user/myaddress.vue'
import Addaddress from '@/views/user/addAddress.vue'
import Login from '@/views/user/login.vue'
import Register from '@/views/user/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: Myaddress
    },
    {
      path: '/addAddress',
      name: 'addaddress',
      component: Addaddress
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
