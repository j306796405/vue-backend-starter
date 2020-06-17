import Vue from 'vue'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@base/styles/index.scss' // global css

import App from '@base/App'
import router from '@base/router'
import store from '@base/store'

import '@base/icons' // icon
import '@base/permission' // permission control

if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true
}

Vue.prototype.$log = window.console.log
Vue.use(ElementUI)
Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.use({ vm })
