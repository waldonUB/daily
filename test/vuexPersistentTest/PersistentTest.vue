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
    {{persist4Vuex}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
      console.log(`state2Vuex的val：` + newVal)
      this.$store.commit('persist4Vuex', newVal)
    }
  },
  computed: {
    ...mapState({
      persist4Vuex: state => state.persist4Vuex + '-Local'
    })
  }
}
</script>

<style scoped>

</style>
