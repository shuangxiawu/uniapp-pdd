import Vue from 'vue'
import App from './App'
// import api from '@/common/http/api.js'
import $Config from './config.js'
Vue.config.productionTip = false


// Vue.prototype.$api = api
Vue.prototype.$Config=$Config
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
