<template>
<main>
  <div id="app">
    <b-navbar class="navbar-adopetme">
      <template #brand>
        <b-navbar-item 
        v-if="!user.id"
        tag="router-link" :to="{ path: '/' }">
          <span class="logo-adopetme">Adopetme</span>
        </b-navbar-item>
        <b-navbar-item 
        v-if="user.id"
        tag="router-link" :to="{ path: '/dashboard' }">
          <span class="logo-adopetme">Adopetme</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          v-if="!user.id"
          class="has-background-primary-light"
          tag="router-link"
          :to="{ path: '/registro' }"
        >
          Adotar um Pet
        </b-navbar-item>
        <b-navbar-item
          v-if="user.id"
          class="has-background-primary-light"
          tag="router-link"
          :to="{ path: '/adote-pet' }"
        >
          Adotar um Pet
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          Sobre o projeto
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
          <b-dropdown-item 
          aria-role="menuitem">
              <b-button
                expanded
                tag="router-link"
                :to="{ path: '/editar-pet' }"
                type="is-primary"> <b-icon icon="dog" class="pr-5 pl-3">
              </b-icon>Editar Pet</b-button>
              
          </b-dropdown-item>
          <b-dropdown-item 
          value="home" aria-role="menuitem">
          <b-button
                expanded
                tag="router-link"
                :to="{ path: '/atualizar-perfil' }"
                type="is-primary"> <b-icon icon="account-edit-outline" class="pr-5 pl-3">
              </b-icon>Editar Perfil</b-button>
          </b-dropdown-item>
          <b-dropdown-item
          aria-role="menuitem">
           <b-button
                expanded
                tag="router-link"
                :to="{ path: '/solicitacoes' }"
                type="is-primary"> <b-icon icon="dog-service" class="pr-5 pl-3">
              </b-icon>Solicitações Enviadas</b-button>
          </b-dropdown-item>
          <b-dropdown-item  aria-role="menuitem">
             <b-button
                class="content has-text-centered"
                expanded
                tag="router-link"
                :to="{ path: '/solicitacoes' }"
                type="is-primary"> <b-icon icon="dog-service" class="pr-5 pl-3">
              </b-icon>Solicitações Recebidas</b-button>
          </b-dropdown-item>
          <hr class="dropdown-divider" aria-role="menuitem" />
          <b-dropdown-item value="logout" aria-role="menuitem">
          <b-button
                class="content has-text-centered"
                expanded
                tag="router-link"
                :to="{ path: '/' }"
                type="is-primary"> <b-icon icon="logout" class="pr-5 pl-3">
              </b-icon>Logout</b-button>
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
</main>
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


</style>
