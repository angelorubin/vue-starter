import Vue from 'vue'
import Router from 'vue-router'
import { routes as app } from '../app'

Vue.use(Router)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
const routes = [...app]
console.log(routes)

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history', // do not use /#/.
})

export default router