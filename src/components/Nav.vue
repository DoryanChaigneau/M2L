<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">M2L</router-link>
          </li>
          <li class="nav-item active">
            <router-link  class="nav-link" to="/home">Accueil</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/rp">Resaparam</router-link>
          </li>
        </ul>
        <img alt="Vue-logo" src="../assets/logoM.png">
        
      </div>
    </nav>
    
    <router-view/>
  </div>
</template>


<script>
export default {
    name: "Nav"
  }
</script>

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