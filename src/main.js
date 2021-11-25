import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/custom-theme/global.css'

import axios from 'axios'
// axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
Vue.prototype.$http = axios

require('./mock/index.js')

Vue.config.productionTip = false

/**
 * 获取屏幕宽高
 */
Vue.prototype.$getViewportSize = function () {
  return {
    // 兼容性获取屏幕宽度
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    // 兼容性获取屏幕高度
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
