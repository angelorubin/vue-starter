const Diagnostico = r => require.ensure([], () => r(require('./main')), 'diagnostico-bundle')

export default [
  {
    name: 'diagnostico',
    path: '/diagnostico',
    component: Diagnostico
  }
]