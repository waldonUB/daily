<template>
 <div></div>
</template>

<script>
import {count, incCount} from './lib.js'
import mod from './lib2.js'

console.log(`lib:  ` + count)
incCount()
console.log(`lib:  ` + count)

console.log(`lib2:  ` + mod.count)
mod.incCount()
console.log(`lib2:  ` + mod.count)

export default {
  name: 'ES6Test'
}
</script>

<style scoped>

</style>
