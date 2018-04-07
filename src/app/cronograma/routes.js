const Cronograma = r => require.ensure([], () => r(require('./main')), 'cronograma-bundle')

export default [
  {
    name: 'cronograma',
    path: '/cronograma',
    component: Cronograma
  }
]