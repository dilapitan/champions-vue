import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.$ = window.jQuery = require('jquery')

require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
