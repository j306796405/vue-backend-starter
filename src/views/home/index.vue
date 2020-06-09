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
  mounted () {
    console.log(this.welcome)
  }
}
</script>

<style scoped>
  @import "index.scss";
</style>
