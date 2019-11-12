<template>
  <div class="login">
    <mt-field placeholder="用户名/手机号" v-model="info.username" class="kuan"></mt-field>
    <mt-field placeholder="密码" type="password" v-model="info.password" class="kuan"></mt-field>
    <mt-button type="primary" class="bit-login" @click="formLogin">登录</mt-button>
    <router-link to="/register" class="register">免费注册</router-link>
  </div>
</template>

<script>
  import {Login} from '@/api/index'

  export default {
    name: 'login',
    data () {
      return {
        info: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    mounted () {
      this.$store.commit('setTitle', '登录')
    },
    methods: {
      formLogin () {
        return new Promise((resolve, reject) => {
          Login(this.info).then(response => {
            if (response.data.code === 200) {
              this.$toast({
                message: response.data.success,
                iconClass: 'icon icon-success'
              })
              this.$router.push('/index')
            } else {
              this.$toast({
                message: response.data.success,
                iconClass: 'icon icon-success'
              })
              resolve()
            }
          }).catch(error => {
            console.log(error)
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    padding: 10px;

    .kuan {
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      min-height: 40px;
    }

    .bit-login {
      width: 100%;
      margin-top: 25px;
    }

    .register {
      color: #0094ff;
      font-size: 14px;
      float: right;
      margin-top: 10px;
    }
  }

</style>
