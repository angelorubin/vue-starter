/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const Diagnostico = r => require.ensure([], () => r(require('./main')), 'diagnostico-bundle')

export default [
  {
    name: 'diagnostico',
    path: '/diagnostico',
    component: Diagnostico
  }
]