<template>
  <div class="me">
    <div class="mysmg">
      <div class="my-left"><img src="../../assets/images/user.jpg" alt=""></div>
      <div class="my-right"><p>{{mysmg.username}}</p><span>绑定手机：{{mysmg.mobile}}</span></div>
    </div>
    <router-link :to="{path:'/login'}" class="lianjie">
      <span>账号与安全</span>
      <span>&gt;</span>
    </router-link>
    <router-link :to="{path:'/cart'}" class="lianjie">
      <span>我的购物车</span>
      <span>&gt;</span>
    </router-link>
    <router-link :to="{path:'/myaddress'}" class="lianjie">
      <span>收货地址</span>
      <span>&gt;</span>
    </router-link>
    <mt-button @click="handleClick" type="primary" style="margin: 20px auto; display: block; width: 90%;">退出登录
    </mt-button>
  </div>
</template>

<script>
  import {Logout} from '@/api/index'

  export default {
    name: 'me',
    data () {
      return {
        mysmg: {
          username: 'vue',
          mobile: '100861123867'
        }
      }
    },
    mounted () {
      this.$store.commit('setTitle', '会员中心')
    },
    methods: {
      handleClick () {
        return new Promise((resolve, reject) => {
          Logout().then(response => {
            console.log(response)
            if (response.data.code === 200) {
              this.$toast({
                message: response.data.success,
                iconClass: 'icon icon-success'
              })
              this.$store.commit('SET_TOKEN', '')
              this.$router.push('/login')
              resolve()
            }
          }).catch(e => {
            console.log(e)
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .me {
    padding: 5px 20px;
  }

  .mysmg {
    display: flex;
    border-bottom: 1px solid #999;

    .my-left {
      width: 50px;
      margin: 5px 20px 5px 0px;

      img {
        width: 100%;
      }

    }

    .my-right {
      padding: 5px 10px;

      p {
        line-height: 25px;
      }

      span {
        line-height: 25px;
        color: #aaa;
      }
    }
  }

  .lianjie {
    display: flex;
    border-bottom: 1px solid #999;
    justify-content: space-between;
    padding: 20px 10px 20px 0;

    span {
      font-size: 20px;
    }

    span:nth-child(2) {
      color: #aaa;
      font-size: 25px;
    }
  }
</style>
