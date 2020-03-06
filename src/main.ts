import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Router
import router from './router'
// Vuex
import store from './store'
// Vue Page
import App from './App.vue'

Vue.config.productionTip = false
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
  ])

Vue.use(ElementUI)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
