<script>
  export default {
    name: 'Navbar'
  }
</script>

<template>
  <div>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <router-link to="/cronograma">Cronograma</router-link>
      <router-link to="/diagnostico">Diagnóstico</router-link>
    </ul>
  </div>
</template>

<style>
  ul {
    list-style-type: none;
  }
  li {
    display: inline;
  }
</style>
