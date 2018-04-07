const Home = r => require.ensure([], () => r(require('./main')), 'home-bundle')

export default [
  {
    name: 'home',
    path: '*',
    component: Home
  }
]