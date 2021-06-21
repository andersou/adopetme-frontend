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
                Estes são todos os usuários que desejam adotar um pet seu!
              </h1>

              <div v-if="requestsData.length" class="center mt-1">
                <b-field>
                  <b-switch v-model="showCancelled">
                    Mostrar solicitações canceladas
                  </b-switch>
                </b-field>
              </div>

              <div v-if="requestsData.length" class="columns is-multiline mt-2">
                <div
                  v-for="request in requests"
                  class="column is-half"
                  :key="request.id"
                >
                  <!-- Pet-card (separar em componente) -->
                  <div class="card">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left is-relative"></div>
                        <div class="media-content center">
                          <p class="title is-4">
                            Solicitação {{ request.id }}
                            <b-tag
                              v-if="!request.approvedAt && !request.cancelledAt"
                              type="is-primary"
                              >Aguardando</b-tag
                            >
                            <b-tag v-if="request.approvedAt" type="is-success"
                              >Aprovada</b-tag
                            >

                            <b-tag v-if="request.cancelledAt" type="is-danger"
                              >Rejeitada</b-tag
                            >
                          </p>
                        </div>
                      </div>
                      <!--
                  <div> CREATED {{request._createdAt}} </div>
                  <div> CANCELLED {{request.cancelledAt}}</div>
                  <div> APPROVED {{request.approvedAt}}</div>
                -->

                      <div class="columns mt-1">
                        <div class="column">
                          <p class="title is-4">
                            {{ request.petData.name }}
                            <span
                              class="is-size-6 is-italic has-text-weight-light"
                            >
                              {{ calculateAge(request.petData._birthdayDate) }}
                            </span>
                            <span
                              class="is-size-6 is-italic has-text-weight-light"
                            >
                              <p>
                                {{ petSizeTransform(request.petData._size) }}
                              </p>
                            </span>
                          </p>

                          <div class="card">
                            <router-link
                              :to="'/detalhes/' + request.petData.id"
                            >
                              <div class="card-image">
                                <b-image
                                  class="image"
                                  :src="getPetPhoto(request.petData)"
                                  src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                                  ratio="5by3"
                                >
                                </b-image>
                              </div>
                            </router-link>
                          </div>

                          <div class="mt-5">
                            {{ request.petData.simpleDescription }}
                          </div>
                        </div>

                        <div class="column">
                          <p class="title is-4 center">
                            {{ request.adopterData.firstName }}
                            {{ request.adopterData.lastName }}

                            <span>
                              <p class="title is-4">
                                <a :href="request.adopterData.facebookProfile"
                                  ><b-icon icon="facebook" size="is-medium">
                                  </b-icon
                                ></a>
                              </p>
                            </span>

                            <span class="">
                              <b-image
                                class="image is-128x128 content has-text-centered center mt-2"
                                :src="
                                  processUserLink(request.adopterData.photoUri)
                                "
                                :rounded="true"
                              ></b-image>
                              <b-rate
                                v-model="
                                  request.adopterData.adopterRating.average
                                "
                                disabled
                                icon="paw"
                                class="is-justify-content-center"
                              ></b-rate>
                            </span>
                          </p>
                          <p class="title is-4">
                            Recebida há:
                            <span class="is-size-6 has-text-weight-light">
                              {{ calculateAge(request._createdAt) }}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="content center">
                        <b-button
                          type="is-primary is-uppercase"
                          @click="
                            selectedRequest = request;
                            modalProfile = true;
                          "
                          >Dados do Adotante
                        </b-button>
                        <b-button
                          v-if="request.approvedAt"
                          type="is-warning is-uppercase"
                          :disabled="request.hasRated"
                          class="ml-2"
                          @click="
                            selectedRequest = request;
                            modalRate = true;
                          "
                          :icon-left="request.hasRated ? 'paw' : ''"
                        >
                          <span>
                            {{
                              request.hasRated
                                ? request.hasRated.score
                                : "Avaliar"
                            }}
                          </span>
                        </b-button>
                        <span> </span>
                        <b-button
                          v-if="!request.approvedAt && !request.cancelledAt"
                          class="ml-2"
                          @click="approve(request.id)"
                          type="is-primary"
                        >
                          <b-icon icon="check"></b-icon>
                        </b-button>
                        <b-button
                          v-else
                          class="ml-2"
                          disabled
                          type="is-primary"
                        >
                          <b-icon icon="check"></b-icon>
                        </b-button>
                        <b-button
                          v-if="!request.approvedAt && !request.cancelledAt"
                          class="ml-2"
                          @click="rejection(request.id)"
                          type="is-danger"
                        >
                          <b-icon icon="close"></b-icon>
                        </b-button>
                        <b-button v-else class="ml-2" disabled type="is-danger">
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
              <section v-else class="hero">
                <div class="container has-text-centered">
                  <h1 class="is-size-4">
                    Nenhuma solicitação de adoção recebida!
                  </h1>
                  <img
                    src="../../src/assets/no-adoptions.svg"
                    alt=""
                    srcset=""
                  />

                  <b-button
                    class="mr-4"
                    tag="router-link"
                    :to="{ path: '/cadastro-pet' }"
                    type="is-primary"
                  >
                    Adicionar Pet
                  </b-button>

                  <b-button
                    class="mr-4"
                    tag="router-link"
                    :to="{ path: '/my-pets' }"
                    type="is-primary"
                  >
                    Editar Pets
                  </b-button>
                </div>
              </section>
              <!-- Fim if primário -->
              <b-modal
                v-model="modalProfile"
                :width="640"
                scroll="keep"
                v-if="selectedRequest.adopterData"
              >
                <div class="card">
                  <figure class="image">
                    <b-image
                      class="image"
                      :src="
                        processUserLink(selectedRequest.adopterData.photoUri)
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
                                selectedRequest.adopterData.photoUri
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
                          {{ selectedRequest.adopterData.firstName }}
                          {{ selectedRequest.adopterData.lastName }}
                        </p>
                        <p class="subtitle is-6">
                          {{ selectedRequest.adopterData.email }}
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
                              calculateAge(
                                selectedRequest.adopterData._birthdayDate
                              )
                            }}
                          </p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Telefone
                          </h1>
                          <p>{{ selectedRequest.adopterData.phone }}</p>
                        </div>
                        <div class="column">
                          <h1 class="is-size-4 has-text-weight-bold">
                            Nota
                          </h1>
                          <b-rate
                            v-model="
                              selectedRequest.adopterData.adopterRating.average
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
                          <p>{{ selectedRequest.adopterData.address }}</p>
                        </div>
                      </div>
                      <small
                        >Usuário do app há:
                        {{
                          calculateAge(selectedRequest.adopterData._createdAt)
                        }}</small
                      >
                    </div>
                  </div>
                </div>
              </b-modal>
              <b-modal
                v-if="selectedRequest.adopterData"
                v-model="modalRate"
                :width="640"
                scroll="keep"
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
                                selectedRequest.adopterData.photoUri
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
                          {{ selectedRequest.adopterData.firstName }}
                          {{ selectedRequest.adopterData.lastName }}
                        </p>
                        <p class="subtitle is-6">
                          {{ selectedRequest.adopterData.email }}
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
                        {{
                          calculateAge(selectedRequest.adopterData._createdAt)
                        }}</small
                      >
                    </div>
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
//import { requestedAdoptions } from "../services.api";
import { rateAdoption } from "../services/api";
import { requestedProtectorAdoptions } from "../services/api";
import { approveAdoption } from "../services/api";
import { rejectAdoption } from "../services/api";
import petHelpersMixin from "../mixins/petHelpers";

export default {
  mixins: [petHelpersMixin],
  computed: {
    ...mapState(["user"]),
    requests() {
      let requests = this.requestsData;
      if (!this.showCancelled) {
        requests = requests.filter((req) => !req.cancelledAt);
      }
      return requests;
    },
  },
  data() {
    return {
      requestsData: [],
      modalProfile: false,
      modalRate: false,
      showCancelled: false,
      selectedRequest: {},
      rate: 5,
    };
  },
  mounted() {
    this.updateRequests();
  },
  methods: {
    approve(id) {
      this.$buefy.dialog
        .confirm({
          title: "Confirmar adoção",
          message: `Você tem certeza que deseja confirmar a adoção? 
                              Esteja ciente de todas as informações referentes ao adotante,
                              ao confirmar você concorda com todos os termos firmados durante o processo de adoção
                              do seu pet.`,
          cancelText: "Cancelar",
          confirmText: "Confirmar adoção",
          type: "is-success",
          onConfirm: () => {
            this.$buefy.toast.open("Adoção aprovada com sucesso!");
            approveAdoption(id).then(() => {this.updateRequests();});
          },
        })
        .catch(() => {
          this.$buefy.toast.open({
            message:
              "Essa adoção já foi aprovada, você ainda pode cancelar essa ação!",
            type: "is-danger",
          });
        });
    },
    rejection(id) {
      this.$buefy.dialog
        .confirm({
          title: "Rejeitar pedido de adoção",
          message: `Você tem certeza que deseja rejeitar a adoção? 
                              Esteja ciente de todas as informações referentes ao adotante,
                              ao rejeitar você está de acordo que este adotante não é o mais apto à cuidar do seu amiguinho
                              neste momento`,
          cancelText: "Cancelar",
          confirmText: "Rejeitar adoção",
          type: "is-danger",
          onConfirm: () => {
            this.$buefy.toast.open("Adoção rejeitada com sucesso!");
            rejectAdoption(id).then(() => {this.updateRequests();});
          },
        })
        .catch(() => {
          this.$buefy.toast.open({
            message:
              "Essa adoção já foi reprovada, você ainda pode cancelar essa ação",
            type: "is-danger",
          });
        });
    },
    updateRequests() {
      requestedProtectorAdoptions().then((res) => {
        this.requestsData = res.data;
        console.log(this.requestsData);
      });
    },
    doRate(val) {
      rateAdoption(this.selectedRequest.id, val, "")
        .then(() => {
          this.updateRequests();
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
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.p-1 {
  padding: 1em;
}
</style>
