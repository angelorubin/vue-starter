<script>
  export default {
    name: 'Navbar'
  }
</script>

<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Consult Mobi</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-nav-text>
              <b-link to="/home">Home</b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item href="#">
            <b-nav-text>
              <b-link to="/cronograma">Cronograma</b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item href="#">
            <b-nav-text>
              <b-link to="/diagnostico">Diagnóstico</b-link>
            </b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
