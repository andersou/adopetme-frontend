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
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            Sobre o projeto
          </b-navbar-item>
        </template>

        <template #end>
          <figure
            v-if="user.photoUri"
            class="image is-32x32 is-align-self-center"
          >
            <img class="is-rounded" :src="processLink(user.photoUri)" />
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
              <router-link to="/request-received">
                <b-icon icon="dog-service" class="pr-5 pl-3"> </b-icon
                >Solicitações Recebidas
              </router-link>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item has-link aria-role="menuitem">
              <router-link to="/request-sent">
                <b-icon icon="paw" class="pr-5 pl-3"> </b-icon>Solicitações
                Enviadas
              </router-link>
            </b-dropdown-item>

            <hr class="dropdown-divider" aria-role="menuitem" />
            <b-dropdown-item value="logout" aria-role="menuitem">
              <router-link to="/">
                <b-icon icon="logout" class="pr-5 pl-3"> </b-icon>Logout
              </router-link>
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

      <div class="column"></div>
      <!-- Sei que não é a forma certa de adicionar esse espaço, mas tbm n sei qual a forma certa -->
      <footer class="footer pb-0 has-background-light">
        <!-- E aqui  não tava sabendo como setar uma cor qualquer na classe footer do Bulma, então deixei cinza -->
        <div class="columns">
          <div class="column is-one-third">
            <div class="content has-text-centered">
              <p>
                <strong>MAPA DO SITE</strong>
              </p>

              <p>
                <router-link to="/about">
                  Sobre
                </router-link>
              </p>

              <p>
                <router-link :to="{ path: '/adote-pet' }">
                  Adotar um Pet
                </router-link>
              </p>
              <p>
                <a :to="{ path: '/adote-pet' }">
                  Adotar um Pet erro
                </a>
              </p>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content has-text-centered">
              <p>
                <strong>CONTATO</strong>
              </p>
              <p>
                <b-icon icon="map-marker" size="is-small"> </b-icon>
                Endereço: R. Gomes Carneiro, 01 - Balsa, Pelotas
              </p>
              <p>
                <b-icon icon="phone-classic" size="is-small"> </b-icon>
                Telefone: +55(53)99999-9999
              </p>
              <p>
                <b-icon icon="email" size="is-small"> </b-icon>
                Email: AdoPetMe@adopet.me
              </p>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content has-text-centered">
              <p>
                <strong>SIGA-NOS</strong>
              </p>
              <div
                class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6 mb-6"
              >
                <figure class="image adopetme-social-media">
                  <div class="columns">
                    <div class="column">
                      <a href="https://www.facebook.com/">
                        <img
                          src="../src/assets/AdoPetMe_Facebook.png"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                    <div class="column">
                      <a href="https://www.twitter.com/">
                        <img
                          src="../src/assets/AdoPetMe_Twitter.png"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                    <div class="column">
                      <a href="https://www.instagram.com/">
                        <img
                          src="../src/assets/AdoPetMe_Instagram.png"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                    <div class="column">
                      <a href="https://www.youtube.com/">
                        <img
                          src="../src/assets/AdoPetMe_Youtube.png"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <hr
          style="height:2px;border-width:0;color:gray;background-color:gray;margin:1.5rem 0 0.5rem 0.5rem"
        />
        <span class="logo-adopetme ">Adopetme</span>
      </footer>
      <!-- 
      <img onclick="topFunction()" id="myBtn" src="../src/assets/AdoPetMe_Youtube.png" alt="" srcset=""/>
       -->
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
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
