<template>
 <div></div>
</template>

<script>
import {count, incCount} from './lib.js'
// import mod from './lib2.js'

// console.log(`test2-lib2:  ` + mod.count)
// mod.incCount()
// console.log(`test2-lib2:  ` + mod.count)

export default {
  name: 'ES6Test2',
  mounted () {
    console.log(`test2-lib:  ` + count)
    incCount()
    console.log(`test2-lib:  ` + count)
  }
}
</script>

<style scoped>

</style>
