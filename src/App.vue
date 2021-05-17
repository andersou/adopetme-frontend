<template>
  <div id="app">
    <b-navbar class="navbar-adopetme">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="logo-adopetme">Adopetme</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          class="has-background-primary-light"
          tag="router-link"
          :to="{ path: '/registro' }"
        >
          Adotar um Pet
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          Sobre o projeto
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/registro' }">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Registrar</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
@include touch {
  .navbar-end .buttons .button {
    left: 0;
    // transform: translateX(-50%);
  }
}
.navbar-adopetme {
  border-bottom: $primary $adopetme-navbar-border-height solid;
}
.logo-adopetme {
  font-family: "Staatliches", cursive;
  color: $adopetme-logo-color;
  font-size: 1.5rem;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
