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
        <b-navbar-item tag="router-link" :to="{ path: '/Solicitacoes' }">
          Solicitações
        </b-navbar-item>
      </template>

      <template #end>
        <b-dropdown
          v-if="user.id"
          position="is-bottom-left"
          append-to-body
          aria-role="menu"
        >
          <template #trigger>
            <a class="navbar-item" role="button">
              <span>Menu</span>
              <b-icon icon="menu-down"></b-icon>
            </a>
          </template>

          <b-dropdown-item custom aria-role="menuitem">
            Logged as <b>{{ user.firstName }} {{ user.lastName }}</b>
          </b-dropdown-item>
          <hr class="dropdown-divider" />
          <b-dropdown-item has-link aria-role="menuitem">
            <a href="https://google.com" target="_blank">
              <b-icon icon="link"></b-icon>
              Google (link)
            </a>
          </b-dropdown-item>
          <b-dropdown-item value="home" aria-role="menuitem">
            <b-icon icon="home"></b-icon>
            Home
          </b-dropdown-item>
          <b-dropdown-item value="products" aria-role="menuitem">
            <b-icon icon="cart"></b-icon>
            Products
          </b-dropdown-item>
          <b-dropdown-item value="blog" disabled aria-role="menuitem">
            <b-icon icon="book-open"></b-icon>
            Blog
          </b-dropdown-item>
          <hr class="dropdown-divider" aria-role="menuitem" />
          <b-dropdown-item value="settings">
            <b-icon icon="settings"></b-icon>
            Settings
          </b-dropdown-item>
          <b-dropdown-item value="logout" aria-role="menuitem">
            <b-icon icon="logout"></b-icon>
            Logout
          </b-dropdown-item>
        </b-dropdown>
        <b-navbar-item v-else tag="router-link" :to="{ path: '/registro' }">
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
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>
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
