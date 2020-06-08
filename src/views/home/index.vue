<template>
  <div class="home-page">
    {{ welcome }}
  </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
          welcome: 'hello'
      }
    },
    mounted(){
      console.log(abc)
    }
  }
</script>

<style scoped>
  @import "index.scss";
</style>
