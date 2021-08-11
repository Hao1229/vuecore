<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('api', ['data'])
  },
  mounted () {
    this.fetchApi()
  },
  methods: {
    ...mapActions('api', ['fetchApi'])
  }
}
</script>
