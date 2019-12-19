import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/base.css'
import './assets/public.css'

Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
