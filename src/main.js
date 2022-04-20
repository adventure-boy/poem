import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from '@/store/index'

Vue.prototype.$element = ElementUI 

Vue.config.productionTip = false
Vue.prototype.$axios = axios 
Vue.use(VueRouter)
Vue.use(ElementUI)


var vm = new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')

console.log(vm)
