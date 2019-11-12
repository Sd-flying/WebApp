<template>
  <div class="address">
    <mt-field label="收货人" placeholder="请输入收货人" v-model="addressObj.recipients"></mt-field>
    <mt-field label="邮编" placeholder="请输入邮编" v-model="addressObj.postcode"></mt-field>
    <mt-field label="省市区" placeholder="请输入省市区"  v-model="addressObj.address"></mt-field>
    <mt-field label="详细地址" placeholder="详细地址" v-model="addressObj.addressDetail"></mt-field>
    <mt-button @click.native="addAddress" type="primary" style="margin: 20px auto; display: block; width: 90%;">保存
    </mt-button>
  </div>
</template>

<script>
  export default {
    name: 'addAddress',
    data () {
      return {
        addressObj: {
          addressDetail: '',
          address: '',
          postcode: '',
          recipients: ''
        }
      }
    },
    methods: {
      addAddress () {
        if (!this.addressObj.recipients.trim()) {
          this.$toast({
            message: '请填写收货人',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.addressObj.postcode.trim()) {
          this.$toast({
            message: 'top',
            position: 'middle',
            duration: 2000
          })
          return false
        }
        if (!this.addressObj.address.trim()) {
          this.$toast({
            message: '请填写省市区',
            position: 'top',
            duration: 2000
          })
          return false
        }
        if (!this.addressObj.addressDetail.trim()) {
          this.$toast({
            message: '请填写详细地址',
            position: 'top',
            duration: 2000
          })
          return false
        }
        //获取收获地址
        let addressData = JSON.parse(localStorage.getItem('addressData')) || []
        addressData.push(this.addressObj)
        localStorage.setItem('addressData', JSON.stringify(addressData))
        this.$toast({
          message: '添加成功',
          position: 'middle',
          duration: 2000
        })
      }
    },
    mounted () {
      this.$store.commit('setTitle', '添加收获地址')
    }
  }
</script>

<style scoped>

</style>
