<template>
  <div class="index">
    <span class="index__text">vue core</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('updateLoading', true)
    setTimeout(() => {
      this.$store.dispatch('updateLoading', false)
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009FCC;
  &__text {
    color: black;
    font-size: 50px;
  }
}
</style>
