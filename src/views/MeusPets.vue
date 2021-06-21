<template>
  <main>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="is-size-3 is-uppercase has-text-weight-light">
            {{ user.firstName }},
          </h1>
          <h1 class="is-size-6 has-text-weight-light mb-4 is-uppercase">
            Aqui estão todos os seus pets!
          </h1>

          <div v-if="myPetsData.length" class="columns is-multiline tuble mt-4" >
            <div v-for="pet in myPetsData" class="column is-half " :key="pet.id">
              <!-- Pet-card (separar em componente) -->
              <div class="card">
                 <router-link :to="'/detalhes/' + pet.id">
                <div class="card-image">
                  <b-image
                    class="image"
                    :src="getPetPhoto(pet)"
                    src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                    ratio="4by3"
                  >
                  </b-image>
                </div>
              </router-link>
                <div class="card-content" >
                   <b-tag v-if="pet.isAdopted" class="ml-1" type="is-success">Pet adotado</b-tag>
                  <div class="media">
                    <div class="media-left is-relative">
                      <b-icon
                        :icon="getPetSpecieIcon(pet._specie)"
                        pack="fas"
                        size="is-large"
                      >
                      </b-icon>
                      <b-icon
                        :icon="getPetSexIcon(pet.sex)"
                        :class="{
                          'sex-icon': true,
                          'sex-icon-male': !!(pet.sex == 'M'),
                          'sex-icon-female': !!(pet.sex == 'F'),
                        }"
                        pack="fas"
                        size="is-large"
                      >
                      </b-icon>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">
                        {{ pet.name }}
                        <span
                          class="is-size-6 is-italic has-text-weight-light"
                          >{{ calculateAge(pet._birthdayDate) }}</span
                        >
                      </p>
                      <p class="subtitle is-6 mb-1">
                        {{ user.firstName }} {{ user.lastName }}
                      </p>
                      <p class="subtitle is-6 mb-1">
                        {{ petSizeTransform(pet._size) }}
                      </p>
                    </div>
                    <!-- Essa é a pagina dos pets que o usuário colocou para a adoção
                   como ele vai avaliar uma adoção que é dele?????
                    <div class="is-justify-content-right mx-4">
                      <p>Avalie a adoção:</p>
                      <b-rate v-model="rate" icon="paw" size="is-medium" class="is-justify-content-center"></b-rate>
                    </div>-->
                  </div>

                  <div class="content">
                    {{ pet.simpleDescription }}
                  </div>

                  <div class="content center">
                    <b-button
                      tag="router-link"
                      :to="'/editar-pet/' + pet.id"
                      type="is-primary is-uppercase"
                      :disabled="pet.isAdopted"
                      >Editar Pet
                    </b-button>
                    <b-button
                      class="ml-2"
                      @click="petDelete(pet.id)"
                      :disabled="pet.isAdopted"
                      type="is-danger"
                    >
                      <b-icon icon="close"></b-icon>
                    </b-button>
                  </div>
                </div>
                <!-- Fim conteúdo do card -->
              </div>
              <!-- Fim card secundário (pets) -->
            </div>
            <!-- Fim laço for -->
          </div>
          <!-- Fim if primário -->

          <div v-if="myPetsData == ''">
            <section class="hero">
              <div class="container has-text-centered hero-body spacing">
                <h1 class="is-size-4">
                  Você ainda não tem nenhum Pet!
                </h1>
                <img src="../../src/assets/no-pet.svg" alt="" srcset="" />
                <b-button
                  class="mr-4"
                  tag="router-link"
                  :to="{ path: '/cadastro-pet' }"
                  type="is-primary is-uppercase"
                >
                  Adicionar Pet
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
import { getMyPets } from "../services/api";
import { deletePet } from "../services/api";
import { mapState } from "vuex";
import petHelpersMixin from "../mixins/petHelpers";
export default {
  mixins: [petHelpersMixin],
  computed: {
    ...mapState(["user"]),
    
  },
  mounted() {
    this.loadMyPets();
  },
  components: {},
  data() {
    return {
      progress: false,
      progressType: "is-primary",

      myPetsData: [],
    };
  },
  methods: {
    loadMyPets() {
      return getMyPets().then((res) => {
        this.myPetsData = res.data;
      });
    },

      petDelete(id){
        deletePet(id).then(() => {
          this.loadMyPets();
        });
    }

  },
  
};
</script>

<style lang="scss" scoped>
main {
  background: url(../assets/capa.png), url(../assets/ruido.png),
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
.tuble {
  margin-top: -100px;
}
section {
  margin-top: -100px;
}
@include mobile {
  .tuble {
    margin-top: -250px;
  }
}
.spacing{
  margin-top:70px;
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
