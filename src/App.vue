<template>
  <main>
    <div id="app">
      <a id="top"></a>
      <b-navbar class="navbar-adopetme">
        <template #brand>
          <b-navbar-item v-if="!user.id" tag="router-link" :to="{ path: '/' }">
            <span class="logo-adopetme">Adopetme</span>
          </b-navbar-item>
          <b-navbar-item v-else tag="router-link" :to="{ path: '/dashboard' }">
            <span class="logo-adopetme">Adopetme</span>
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item
            v-if="!user.id"
            class="has-background-primary-light"
            tag="router-link"
            :to="{ path: '/adote-pet' }"
          >
            Adotar um Pet
          </b-navbar-item>
          <b-navbar-item
            v-else
            class="has-background-primary-light"
            tag="router-link"
            :to="{ path: '/adote-pet' }"
          >
            Adotar um Pet
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
            Sobre o projeto
          </b-navbar-item>
        </template>

        <template #end>
          <figure
            v-if="user.photoUri"
            class="image is-32x32 is-align-self-center"
          >
            <img
              class="is-rounded response-mobile"
              :src="processLink(user.photoUri)"
            />
          </figure>
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
              <b>{{ user.firstName }} {{ user.lastName }}</b>
            </b-dropdown-item>
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/atualizar-perfil">
                <b-icon icon="account-edit-outline" class="pr-5 pl-3"> </b-icon
                >Editar Perfil
              </router-link>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/my-pets">
                <b-icon icon="dog" class="pr-5 pl-3"> </b-icon>Meus Pets
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/my-pets-adp">
                <b-icon icon="cat" class="pr-5 pl-3"> </b-icon>Adotados
              </router-link>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/request-received">
                <b-icon icon="dog-service" class="pr-5 pl-3"> </b-icon
                >Solicitações Recebidas
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/request-sent">
                <b-icon icon="paw" class="pr-5 pl-3"> </b-icon>Solicitações
                Enviadas
              </router-link>
            </b-dropdown-item>

            <hr class="dropdown-divider" aria-role="menuitem" />
            <b-dropdown-item value="logout" aria-role="menuitem">
              <a @click="doLogout">
                <b-icon icon="logout" class="pr-5 pl-3"> </b-icon>Logout
              </a>
            </b-dropdown-item>
          </b-dropdown>
          <template v-else>
            <b-navbar-item tag="router-link" :to="{ path: '/registro' }">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Registrar</strong>
                </a>
              </div>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <div class="buttons">
                <a class=" mx-2 is-primary">
                  <strong>Entrar</strong>
                </a>
              </div>
            </b-navbar-item>
          </template>
        </template>
      </b-navbar>
      <router-view />

      <div class="column"></div>
      <!-- Sei que não é a forma certa de adicionar esse espaço, mas tbm n sei qual a forma certa -->
      <page-footer></page-footer>
      <!-- 
      <img onclick="topFunction()" id="myBtn" src="../src/assets/AdoPetMe_Youtube.png" alt="" srcset=""/>
       -->
    </div>
  </main>
</template>
<script>
import { mapState, mapActions } from "vuex";
import PageFooter from "./components/PageFooter.vue";
export default {
  created() {
    if (!this.user.id) {
      let token = window.sessionStorage.getItem("token");
      if (token) this.loginUserByToken(token);
    }
  },
  components: { PageFooter },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["loginUserByToken", "logout"]),
    doLogout() {
      this.logout();
      this.$router.push("/");
    },
    processLink(link) {
      if (link.startsWith("http")) {
        return link;
      } else {
        if (!link.startsWith("/")) link = "/" + link;
        return `${process.env.VUE_APP_API_URL}/images/users${link}`;
      }
    },
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
.adopetme-social-media {
  width: 800px; //se largura eh 800px, pq ele vai mudando com redimensionamento?
}
@include mobile {
  .response-mobile {
    margin-left: 20px;
  }
}
// #myBtn {
//   display: none; /* Hidden by default */
//   position: fixed; /* Fixed/sticky position */
//   bottom: 20px; /* Place the button at the bottom of the page */
//   right: 30px; /* Place the button 30px from the right */
//   z-index: 99; /* Make sure it does not overlap */
//   border: none; /* Remove borders */
//   outline: none; /* Remove outline */
//   cursor: pointer; /* Add a mouse pointer on hover */
//   padding: 15px; /* Some padding */
// }
</style>
