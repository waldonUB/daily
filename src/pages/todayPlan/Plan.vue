<template>
  <div>
    <div>
      我是plan
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  data () {
    return {

    }
  },
  beforeDestroy () {
    console.log(`我被销毁了`)
  }
}
</script>

<style scoped>

</style>
