<template>
  <div class="register">
    <mt-field placeholder="手机号" v-model="mobile" class="foo"></mt-field>
    <mt-field placeholder="用户名" v-model="username" class="foo"></mt-field>
    <mt-field placeholder="密码" type="password" v-model="password" class="foo"></mt-field>
    <mt-field placeholder="确认密码" type="password" v-model="secondPassword" class="foo"></mt-field>
    <div>
      <mt-field placeholder="认证码" v-model="vCode" class="foo" style="width:200px;float: left"></mt-field>
      <mt-button type="primary" style="float: right;margin-top:10px;">获取验证码</mt-button>
    </div>
    <mt-button type="primary" class="bit-login" @click="sendRegister">注册</mt-button>
    <mt-checklist v-model="radioVal" :options="['我同意《会员服务协议》']" style="float: left"></mt-checklist>
    <router-link to="/login" class="register">立即登录</router-link>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        password: '',
        mobile: '',
        vCode: '', // 验证码
        secondPassword: '',
        radioVal: ['我同意《会员服务协议》']
      }
    },
    mounted () {
      this.$store.commit('setTitle', '注册')
    },
    methods: {
      sendRegister () {
        if (!this.mobile.length) {
          this.$toast({
            message: '请输入手机号',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.username.length) {
          this.$toast({
            message: '请输入用户名',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.password.length) {
          this.$toast({
            message: '请输入密码',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (this.password !== this.secondPassword) {
          this.$toast({
            message: '两次密码不一样',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.vCode.length) {
          this.$toast({
            message: '请输入验证码',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.radioVal.length) {
          this.$toast({
            message: '请同意《会员服务协议》',
            position: 'top',
            duration: 2000
          })
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .register {
    padding: 10px;

    .foo {
      margin: 10px;
      border: 1px solid #ccc;
      min-height: 40px;
      border-radius: 5px;
    }

    .bit-login {
      width: 100%;
      margin-top: 30px;
    }

    .register {
      font-size: 14px;
      color: #0094ff;
      float: right;
      margin-top: 10px;
    }
  }
</style>
