<template>
  <div>
    <p>
      <label>手动设置：</label>
      <input type="text" v-model="state">
      {{$store.state.persistentTest}}
    </p>
    <p>
      <label>使用vuex-persistent：</label>
      <input type="text" v-model="state2Vuex">
      {{$store.state.persist4Vuex}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PersistentTest',
  data () {
    return {
      state: '',
      state2Vuex: ''
    }
  },
  watch: {
    state (newVal) {
      this.$store.commit('persistentTest', newVal)
    },
    state2Vuex (newVal) {
      this.$store.commit('persist4Vuex', newVal)
    }
  }
}
</script>

<style scoped>

</style>
