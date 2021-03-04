<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">M2L</router-link>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/">Accueil</a>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/rp">Resaparam</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/rs">Resaselect</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>