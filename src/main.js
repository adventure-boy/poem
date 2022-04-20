import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from '@/store/index'
import {getHttp,postHttp,deleteHttp,putHttp} from '@/utils/http'



Vue.config.productionTip = false
Vue.prototype.$axios = axios 
Vue.prototype.getHttp= getHttp
Vue.prototype.postHttp= postHttp
Vue.prototype.deleteHttp= deleteHttp
Vue.prototype.putHttp= putHttp

Vue.use(VueRouter)
Vue.use(ElementUI)


var vm = new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')

console.log(vm)
