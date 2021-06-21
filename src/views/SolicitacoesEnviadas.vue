<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column">
          <div class="card ">
            <div class="card-content">
              <h1 class="is-size-3 is-uppercase has-text-weight-light">
                {{ user.firstName }},
              </h1>
              <h1 class="is-size-6 has-text-weight-light mb-4 is-uppercase">
                Estes são todos os pets que você demonstrou interesse em adotar!
              </h1>

              <!--
                <ul v-if="requestsData.length">
                        
                        <li v-for="request in requestsData" :key="request.id">
                            {{ request.petData }}

                        </li>
                    </ul>
                    -->


              <div
                v-if="requestsData.length"
                class="columns is-multiline tuble mt-6"
              >
                <div
                  v-for="request in requestsData"
                  class="column is-half"
                  :key="request.id"
                >

                  <!-- Pet-card (separar em componente) -->
                  <div class="card">
                    <router-link :to="'/detalhes/' + request.petData.id">
                      <div class="card-image">
                        <b-image
                          class="image"
                          :src="getPetPhoto(request.petData)"
                          src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                          ratio="4by3"
                        >
                        </b-image>
                      </div>
                    </router-link>

                    <div class="card-content">
                      <b-tag v-if="request.approvedAt == null && request.cancelledAt == null" class="ml-1" type="is-warning">
                      Solicitação pendente</b-tag>
                      <b-tag v-if="request.approvedAt != null && request.cancelledAt == null" class="ml-1" type="is-success">
                      Solicitação aprovada</b-tag>
                      <b-tag v-if="request.approvedAt == null && request.cancelledAt != null" class="ml-1" type="is-danger">
                      Solicitação rejeitada</b-tag>
                      <div class="media">
                        <div class="media-left is-relative">
                          <b-icon
                            :icon="getPetSpecieIcon(request.petData._specie)"
                            pack="fas"
                            size="is-large"
                          >
                          </b-icon>
                          <b-icon
                            :icon="getPetSexIcon(request.petData.sex)
                             
                            "
                            :class="{
                              'sex-icon': true,
                              'sex-icon-male': !!(request.petData.sex == 'M'),
                              'sex-icon-female': !!(request.petData.sex == 'F'),
                            }"
                            pack="fas"
                            size="is-large"
                          >
                          </b-icon>
                        </div>

                        <div class="media-content">
                          <p class="title is-4">
                            {{ request.petData.name }}
                            <span
                              class="is-size-6 is-italic has-text-weight-light"
                              >{{
                                calculateAge(request.petData._birthdayDate)
                              }}</span
                            >
                          </p>
                          <p class="subtitle is-6 mb-1">
                            {{ request.protectorData.firstName }}
                            {{ request.protectorData.lastName }}
                          </p>
                          <p class="subtitle is-6 mb-1 is-italic">
                            {{ petSizeTransform(request.petData._size) }}
                          </p>
                        </div>
                      </div>

                      <div class="content">
                        {{ request.petData.simpleDescription }}
                      </div>

                      <div class="content center">
                        <b-button
                          type="is-primary is-uppercase"
                          @click="isCardModalActive = true"
                          >Dados do Protetor
                        </b-button>

                        <b-button
                          class="ml-2"
                          @click="petDelete(request.id)"
                          :disabled="request.approvedAt || request.cancelledAt != null"
                          type="is-danger is-uppercase"
                          ><b-icon icon="close"></b-icon>
                        </b-button>

                        <p class="mt-3">
                          Enviado há: {{ calculateAge(request._createdAt) }}
                        </p>
                      </div>
                    </div>
          <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                         <figure class="image">
                                <b-image
                          class="image"
                          :src="
                                  processUserLink(request.protectorData.photoUri)
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
                                  processUserLink(request.protectorData.photoUri)
                                "
                          src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                          ratio="4by3"
                        >
                                </b-image>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{ request.protectorData.firstName }}
                            {{ request.protectorData.lastName }}</p>
                            <p class="subtitle is-6">{{ request.protectorData.email }}</p>
                        </div>
                    </div>

                    <div class="content">
                      <div class="columns">
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">Idade</h1>
                          <p> {{calculateAge(request.protectorData._birthdayDate)}}</p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">Telefone</h1>
                          <p> {{request.protectorData.phone}}</p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">Nota</h1>
                          <b-rate
                                v-model="
                                  request.protectorData.protectorRating.average
                                "
                                disabled
                                icon="paw"
                                class="is-justify-content-center"
                              ></b-rate>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">Endereço</h1>
                          <p> {{request.protectorData.address}}</p>
                        </div>
                      </div>
                      <small>Data de registro do Pet: {{calculateAge(request.protectorData._createdAt)}}</small>
                    </div>
                </div>
            </div>
        </b-modal>
                    <!-- Fim conteúdo do card -->
                  </div>
                  <!-- Fim card secundário (pets) -->
                  
                </div>
                <!-- Fim laço for -->
              </div>
              <!-- Fim if primário -->

              <section v-else class="hero">
                <div class="container has-text-centered hero-body spacing">
                  <h1 class="is-size-4">
                    Você ainda não solicitou nenhuma adoção!
                  </h1>
                  <img
                    src="../../src/assets/no-adoptions-sent.svg"
                    alt=""
                    srcset=""
                  />
                  <b-button
                    class="mr-4"
                    tag="router-link"
                    :to="{ path: '/adote-pet' }"
                    type="is-primary"
                  >
                    Encontre seu novo amiguinho!
                  </b-button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { deleteAdoptionRequest } from "../services/api";
//import { requestedAdoptions } from "../services.api";
import { requestedAdopterAdoptions } from "../services/api";
import petHelpersMixin from "../mixins/petHelpers";

export default {
  mixins: [petHelpersMixin],
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.refresh()
  },
  data() {
    return {
      requestsData: [],
      isCardModalActive: false
    };
  },
  methods: {
    petDelete(id){
        deleteAdoptionRequest(id).then(() => {
          this.refresh();
        });
    },
  refresh(){
    requestedAdopterAdoptions().then((res) => {
      this.requestsData = res.data;
      //console.log(this.requestsData);
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
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
</style>
