import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/public.css'
import './assets/public.scss'
import './styles/specialStyle.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css/'
import { Form } from 'ant-design-vue'
import { Alert } from 'element-ui'

import compGlobal from './compInit'
// compGlobal.install(Vue)
// Vue.component('compGlobal', compGlobal)
Vue.use(compGlobal)
Vue.use(Antd)
Vue.prototype.$form = Form
console.log(Alert)
console.log(Element)
Vue.use(Element, { size: 'small', zIndex: 3000 })

// Vue.config.silent = true
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
