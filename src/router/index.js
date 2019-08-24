import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import PersistentTest from '@test/vuexPersistentTest/PersistentTest'
import ES6Test from '@test/amdCmd/ES6/ES6Test'
import ES6Test2 from '@test/amdCmd/ES6/ES6Test2'
import ES6Test3 from '@test/amdCmd/ES6/ES6Test3'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/persistentTest',
      name: 'PersistentTest',
      component: PersistentTest
    },
    {
      path: '/ES6Test',
      name: 'ES6Test',
      component: ES6Test
    },
    {
      path: '/ES6Test2',
      name: 'ES6Test2',
      component: ES6Test2
    },
    {
      path: '/ES6Test3',
      name: 'ES6Test3',
      component: ES6Test3
    }
  ]
})
