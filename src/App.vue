<template>
  <div id="app">
    <section>
      <loading :active.sync="isLoading"></loading>
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
<style lang="scss">
@import './assets/all';
</style>
