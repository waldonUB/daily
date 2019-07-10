import Vue from "vue"
import router from "./router"
import App from "./App.vue"
import "normalize.css"
import "./css/iconfont/iconfont.js"

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App></App>'
})