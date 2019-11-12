<template>
  <div class="myaddress">
    <mt-button type="default" style="width: 100%" @click="addAddress">添加收货地址</mt-button>
    <div v-for="(item, index) in address" :key="index">
      <div class="bian">
        <p>邮编：{{item.postcode}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 收货人：{{item.recipients}}</p>
        <p>详细地址：{{item.addressDetail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myaddress',
    data () {
      return {
        address: []
      }
    },
    mounted () {
      this.$store.commit('setTitle', '收获地址管理')
      this.address = JSON.parse(localStorage.getItem('addressData')) || []
    },
    methods: {
      addAddress () {
        this.$router.push('/addAddress')
      }
    }
  }
</script>

<style scoped lang="scss">
  .bian {
    margin: 10px 10px;
    border: 1px solid #ddd;
    padding: 5px 5px;

    p {
      line-height: 25px;
    }
  }
</style>
