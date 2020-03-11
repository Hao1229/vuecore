<template>
  <div class="home">
    <index/>
  </div>
</template>

<script>
// @ is an alias to /src
import index from '@/components/index/indexContent.vue'

export default {
  name: 'home',
  components: {
    index
  }
}
</script>
