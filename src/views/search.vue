<template>
    <div class="serve">
      <div class="ser-con">
        <mt-search v-model="serveKey"></mt-search>
        <mt-button size="small" class="serbtn" @click="getserve">搜索</mt-button>
      </div>
      <div class="ser-ss">
        <span></span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'search',
  mounted () {
    this.$store.commit('setTitle', '搜索中心')
  },
  data () {
    return {
      serveKey: ''
    }
  },
  methods: {
    getserve () {

    }
  }
}
</script>

<style scoped lang="scss">
.serve {
  width: 100%;
}
.ser-con{
  position: relative;
  .mt-search{
    height: auto;
    width: 50%;
  }
  .serbtn{
    position: absolute;
    top: 3%;
    right: 0;
    transform: translateY(-50%);
    z-index: 3;
  }
}
.ser-ss{
  .title{
    font-size: 18px;
  }
}
</style>
