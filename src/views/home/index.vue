<template>
  <div class="home-page">
    {{ welcome | toThousand }}
  </div>
</template>

<script>
import { toThousand } from '@/filters'

export default {
  name: 'home',
  filters: {
    toThousand
  },
  data () {
    return {
      welcome: Date.now()
    }
  }
}
</script>

<style scoped>
  @import "index.scss";
</style>
