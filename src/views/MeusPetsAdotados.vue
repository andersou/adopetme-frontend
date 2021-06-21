<template>
  <main>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="is-size-3 is-uppercase has-text-weight-light">
            {{ user.firstName }},
          </h1>
          <h1 class="is-size-6 has-text-weight-light mb-4 is-uppercase">
            Aqui estão todos os seus pets adotados!
          </h1>

          <div v-if="myPetsAdoptData.length" class="columns is-multiline tuble mt-4">
            <div v-for="pet in myPetsAdoptData" class="column is-half" :key="pet.id">
              <!-- Pet-card (separar em componente) -->
              <div class="card">
                <div class="card-image">
                  <b-image
                    class="image"
                    :src="getPetPhoto(pet.petData)"
                    src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                    ratio="4by3"
                  >
                  </b-image>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left is-relative">
                      <b-icon
                        :icon="getPetSpecieIcon(pet.petData._specie)"
                        pack="fas"
                        size="is-large"
                      >
                      </b-icon>
                      <b-icon
                        :icon="getPetSexIcon(pet.petData.sex)"
                        :class="{
                          'sex-icon': true,
                          'sex-icon-male': !!(pet.petData.sex == 'M'),
                          'sex-icon-female': !!(pet.petData.sex == 'F'),
                        }"
                        pack="fas"
                        size="is-large"
                      >
                      </b-icon>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">
                        {{ pet.petData.name }}
                        <span
                          class="is-size-6 is-italic has-text-weight-light"
                          >{{ calculateAge(pet.petData._birthdayDate) }}</span
                        >
                      </p>
                      <p class="subtitle is-6 mb-1">
                        {{ user.firstName }} {{ user.lastName }}
                      </p>
                      <p class="subtitle is-6 mb-1">
                        {{ petSizeTransform(pet.petData._size) }}
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
                    {{ pet.petData.simpleDescription }}
                  </div>

                  <div class="content center">

                        <b-button
                          type="is-primary is-uppercase"
                          @click="
                            selectedRequest = pet;
                            modalProfile = true;
                          "
                          >Dados do Protetor
                        </b-button>


                        <b-button
                          type="is-warning is-uppercase has-text-white"
                          :disabled="pet.hasRated"
                          class="ml-2"
                          @click="
                            selectedRequest = pet;
                            modalRate = true;
                          "
                          :icon-left="pet.hasRated ? 'paw' : ''"
                        >
                          <span>
                            {{
                              pet.hasRated
                                ? pet.hasRated.score
                                : "Avaliar Adoção"
                            }}
                          </span>
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

          <div v-if="myPetsAdoptData == ''">
            <section class="hero">
              <div class="container has-text-centered hero-body spacing">
                <h1 class="is-size-4">
                  Você ainda não tem nenhum Pet!
                </h1>
                <img src="../../src/assets/no-mypet.svg" alt="" srcset="" />
                <b-button
                  class="mr-4"
                  tag="router-link"
                  :to="{ path: '/adote-pet' }"
                  type="is-primary is-uppercase"
                >
                  Adicionar Pet
                </b-button>
              </div>
            </section>
          </div>
            <!-- Modal dos dados -->
              <b-modal
                v-model="modalProfile"
                :width="640"
                scroll="keep"
                v-if="selectedRequest.petData && selectedRequest.petData.protectorData"
              >
                <div class="card">
                  <figure class="image">
                                        <b-image
                      class="image"
                      :src="
                        processUserLink(selectedRequest.petData.protectorData.photoUri)
                      "
                      src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                      ratio="4by3"
                    >
                    </b-image>
                  </figure>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                           <b-image
                            class="image"
                            :src="
                              processUserLink(
                                selectedRequest.petData.protectorData.photoUri
                              )
                            "
                            src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                            ratio="4by3"
                          >
                          </b-image>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">
                          {{selectedRequest.petData.protectorData.firstName}}
                          {{selectedRequest.petData.protectorData.lastName}}
                        </p>
                        <p class="subtitle is-6">
                          {{selectedRequest.petData.protectorData.email}}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <div class="columns">
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Idade
                          </h1>
                          <p>
                            {{
                                 calculateAge(selectedRequest.petData.protectorData._birthdayDate)
                            }}
                          </p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Telefone
                          </h1>
                          <p> {{selectedRequest.petData.protectorData.number}}</p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Nota
                          </h1>
                          <b-rate
                            v-model="
                              selectedRequest.petData.protectorData.protectorRating.average
                            "
                            disabled
                            icon="paw"
                            class="is-justify-content-center"
                          ></b-rate>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Endereço
                          </h1>
                          <p>{{selectedRequest.petData.protectorData.address}}</p>
                        </div>
                      </div>
                      <small
                        >Usuário do app há:
                        {{calculateAge(selectedRequest.petData.protectorData._createdAt)}}</small
                      >
                    </div>
                  </div>
                </div>
              </b-modal>


            <!-- Modal da avaliacao-->
              <b-modal
                v-model="modalRate"
                :width="640"
                scroll="keep"
                v-if="selectedRequest.petData && selectedRequest.petData.protectorData"
              >
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <b-image
                            class="image"
                            :src="
                              processUserLink(
                                selectedRequest.petData.protectorData.photoUri
                              )
                            "
                            src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                            ratio="4by3"
                          >
                          </b-image>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">
                          {{selectedRequest.petData.protectorData.firstName}}
                          {{selectedRequest.petData.protectorData.lastName}}
                        </p>
                        <p class="subtitle is-6">
                           {{selectedRequest.petData.protectorData.email}}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <div class="columns">
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold center">
                            Nota
                          </h1>
                          <b-rate
                            v-model="rate"
                            icon="paw"
                            class="is-justify-content-center"
                            @change="doRate"
                          ></b-rate>
                        </div>
                      </div>
                      <small
                        >Usuário do app há:
                        {{calculateAge(selectedRequest.petData.protectorData._createdAt)}}</small
                      >
                    </div>
                  </div>
                </div>
              </b-modal>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {rateAdoption} from "../services/api";
import {getAdopterAdoptions} from "../services/api";
import { mapState } from "vuex";
import petHelpersMixin from "../mixins/petHelpers";
export default {
  mixins: [petHelpersMixin],
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.loadMyAdoptPets();
  },
  components: {},
  data() {
    return {
      progress: false,
      progressType: "is-primary",

      myPetsAdoptData: [],
      rate: 4,
      modalProfile: false,
      modalRate: false,
      selectedRequest: {},
    };
  },
  methods: {
    loadMyAdoptPets() {
      return getAdopterAdoptions().then((res) => {
        this.myPetsAdoptData = res.data;
        this.rate = this.myPetsAdoptData.rating;
      });
    },

    doRate(val) {
      rateAdoption(this.selectedRequest.id, val, "")
        .then(() => {
          this.loadMyAdoptPets();
          this.$buefy.toast.open("Avaliação recebida com sucesso!");
          this.modalRate = false;
        })
        .catch(() => {
          this.$buefy.toast.open({
            message: "Erro ao processar avaliação",
            type: "is-danger",
          });
        });
    },


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
