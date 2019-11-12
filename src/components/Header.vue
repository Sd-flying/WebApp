<template>
    <mt-header :fixed="true" :title="title">
      <a href="javascript:history.back()" slot="left" v-show="isShow">
        <mt-button icon="back"></mt-button>
      </a>
      <mt-button slot="right" @click="$router.push({'path':'/search'})" v-show="sousuo">搜索</mt-button>
      <mt-button slot="right" @click="$router.push({'path':'/'})" v-show="souye">首页</mt-button>
    </mt-header>

</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: '',
      search: ''
    }
  },
  mounted () {
    this.title = this.$store.commit('getTitle')
  },
  watch: {
    '$store.state.title' (val) {
      this.title = val
    }
  },
  computed: {
    isShow () {
      return !(this.$route.path === '/' || this.$route.path === 'index')
    },
    sousuo () {
      return !(this.$route.path === '/serve' || this.$route.path.indexOf('serveList') !== -1 || this.$route.path.indexOf('detail') !== -1 || this.$route.path === '/login' || this.$route.path === '/me' || this.$route.path === '/register' || this.$route.path === '/myaddress' || this.$route.path === '/addaddress')
    },
    souye () {
      return !(this.$route.path.indexOf('detail') === -1)
    }
  }
}
</script>

<style scoped>
  .mint-header.is-fixed {
    z-index: 99999!important;
  }
</style>
