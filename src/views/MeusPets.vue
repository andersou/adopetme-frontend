<template>
  <main>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="is-size-3 is-uppercase has-text-weight-light">
            {{user.firstName}}, 
          </h1>
          <h1 class="is-size-6 has-text-weight-light mb-4 is-uppercase">
            Aqui estão todos os seus pets!
          </h1>

          <div v-if="petsData.data" class="columns is-multiline tuble">
            <div v-for="pet in petsData.data" class="column is-half" :key="pet.id">
              <div v-if="pet.protectorId == user.id">
              <!-- Pet-card (separar em componente) -->
              <div class="card">
                <div class="card-image">
                  <b-image
                    :src="getPetPhoto(pet)"
                    src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                    ratio="4by3">
                  </b-image>
                </div>
                 <div class="card-content">
                  <div class="media">
                      <div class="media-left is-relative">
                        <b-icon
                          :icon="{ 0: 'paw', 1: 'dog', 2: 'cat' }[pet._specie]"
                          pack="fas"
                          size="is-large">
                        </b-icon>
                        <b-icon
                          :icon="{ M: 'mars', F: 'venus', N: 'genderless' }[pet.sex]"
                          :class="{
                            'sex-icon': true,
                            'sex-icon-male': !!(pet.sex == 'M'),
                            'sex-icon-female': !!(pet.sex == 'F'),
                          }"
                          pack="fas"
                          size="is-large">
                        </b-icon>
                      </div>
                    <div class="media-content">
                      <p class="title is-4">
                        {{ pet.name }}
                        <span class="is-size-6 is-italic has-text-weight-light">{{
                          calculateAge(pet._birthdayDate)
                        }}</span>
                      </p>
                      <p class="subtitle is-6 mb-1">{{user.firstName}} {{user.lastName}}</p>
                      <p class="subtitle is-6 mb-1">
                        {{ petSizeTransform(pet._size) }}
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    {{ pet.simpleDescription }}
                  </div>

                  <div class="content">
                    <b-button
                      tag="router-link"
                      :to="{ path: '/editar-pet' }"
                      type="is-primary is-uppercase"
                      >Editar Pet
                    </b-button>
                    <b-button
                      class="ml-2"
                      tag="router-link"
                      :to="{ path: '/adote-pet' }"
                      type="is-danger">
                      <b-icon icon="trash-can-outline"></b-icon>
                    </b-button>
                  </div>

                  </div><!-- Fim conteúdo do card -->
                </div><!-- Fim card secundário (pets) -->
              </div><!-- Fim if protectorId == user.id -->
            </div><!-- Fim laço for -->
          </div><!-- Fim if primário -->

          <div v-if="petsData.data.protectorId != user.id">
            <section class="hero">
              <div class="container has-text-centered">
                <h1 class="is-size-4">
                  Você ainda não solicitou nenhuma adoção!
                </h1>
                  <img
                    src="../../src/assets/no-pet.svg"
                    alt=""
                    srcset=""
                  />  
                  <b-button
                  class="mr-4"
                  tag="router-link"
                  :to="{ path: '/adote-pet' }"
                  type="is-primary">
                  Buscar próximo amiguinho!
                  </b-button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";
import { getPets } from "../services/api";
import { mapState } from "vuex";
export default {
  mounted() {
    this.loadPets();
  },
  data() {
    return {
      petsData: {},
    };
  },
  computed: mapState(["filters", "sort", "user"]),
  methods: {
    processPetsLink(link) {
      if (link.startsWith("http")) {
        return link;
      } else {
        if (!link.startsWith("/")) link = "/" + link;
        return `${process.env.VUE_APP_API_URL}/pets/users${link}`;
      }
    },
    getPetPhoto(pet) {
      if (pet.petPhotos[0] && pet.petPhotos[0].photoUri)
        return this.processPetsLink(pet.petPhotos[0].photoUri);

      return "";
    },
    loadPets() {
      console.log(this.sort);
      getPets(this.currentPage, this.filters, this.sort)
        .then((r) => {
          this.petsData = r.data;
        })
        .catch(() => {
          this.petsData = {};
        });
    },

    petSizeTransform(petSize) {
      let sizes = {
        "0": "Bem Pequeno",
        "1": "Pequeno",
        "2": "Médio",
        "3": "Grande",
        "4": "Bem Grande",
      };
      //   return this.petsData.consts.sizes[petSize];
      return sizes[petSize];
    },
    calculateAge(birthdayDate) {
      return moment(birthdayDate).fromNow(true);
    },
  },
  watch: {
    filters() {
      this.loadPets();
    },
  },
};
</script>

<style lang="scss" scoped>
 main{
        background:   url(../assets/capa.png),
                      url(../assets/ruido.png),
                      linear-gradient(110deg, $adopetme-logo-color, $primary);
        background-attachment: fixed;
        min-height: calc(100vh - 52px);
        padding-top: 30px;
        padding-bottom: 30px;
    }
.sex-icon {
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}
.sex-icon-male {
  color: #b0c7ed;
}
.sex-icon-female {
  color: #e0caed;
}
  .tuble{
    margin-top:-100px;
  }
  section{
    margin-top: -100px;
  }
  @include mobile{
     .tuble{
    margin-top:-250px;
  }
  }
</style>
