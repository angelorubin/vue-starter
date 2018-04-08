/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const Cronograma = r => require.ensure([], () => r(require('./main')), 'cronograma-bundle')

export default [
  {
    name: 'cronograma',
    path: '/cronograma',
    component: Cronograma
  }
]