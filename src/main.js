import Vue from 'vue'
import Root from './Root'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Root)
})
