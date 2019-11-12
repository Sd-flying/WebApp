<template>
    <div id="cont">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'content'
}
</script>

<style scoped>
  #cont{
    height: 100%;
    overflow: scroll;
    padding: 40px 0 50px 0;
    /*background-color: #42b983;*/
  }
</style>
