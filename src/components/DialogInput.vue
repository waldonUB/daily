<template>
  <div class="dialog" :class="{active: active}">
    <div class="panel-header">
      <span>{{title}}</span>
      <div class="close-btn" @click="closeDialog"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogInput',
  props: {
    visible: {
      require: true,
      default: false,
      type: Boolean
    },
    title: {
      type: String
    }
  },
  computed: {
    active () {
      console.log(`当前visible：` + this.visible)
      return this.visible
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
    }
  },
  activated () {
    console.log(`activated: ` + this.title)
  },
  deactivated () {
    console.log(`Dialog deactivated: ` + this.title)
    this.$destroy()
  },
  mounted () {
    console.log(`mounted: ` + this.title)
  },
  beforeDestroy () {
    console.log(`我要被销毁了`)
  },
  destroyed () {
    console.log(`我已经被销毁了`)
  }
}
</script>

<style scoped lang="scss">
  .dialog {
    width: 60vw;
    height: 80vh;
    background-color: #fff;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 999;
  }
  .active {
    display: block;
  }
  .panel-header {
    width: 100%;
    height: 6vh;
    position: relative;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #333;
    span {
      font-size: 2rem;
    }
    .close-btn {
      width: 3vh;
      height: 3vh;
      background-color: rgba(179, 20, 20, 0.452);
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
    }
  }
</style>
