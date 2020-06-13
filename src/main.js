import Vue from 'vue'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true
}

Vue.prototype.$log = window.console.log
Vue.use(ElementUI, { locale })
Vue.use(VCharts)

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.use({ vm })
