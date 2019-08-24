<template>
 <div></div>
</template>

<script>
import {default as count} from './lib3.js'

export default {
  name: 'ES6Test3',
  mounted () {
    console.log(`test3-lib:  ` + count)
    // count = 8
    console.log(`test3-lib:  ` + count)
  }
}
</script>

<style scoped>

</style>
