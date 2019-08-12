import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import PersistentTest from '@test/vuexPersistentTest/PersistentTest'

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
    
  ]
})
