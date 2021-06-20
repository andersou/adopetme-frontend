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

              <div v-if="requestsData.length" class="columns is-multiline">
                <div
                  v-for="request in requestsData"
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
                          <!-- Imagem do pet aqui -->
                          <router-link :to="'/detalhes/' + request.petData.id">
                            <div class="card-image">
                              <b-image
                                class="image"
                                :src="processPetsLink()"
                                src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                                ratio="4by3"
                              >
                              </b-image>
                            </div>
                          </router-link>
                        </div>

                        <div class="column">
                          <p class="title is-4 center">
                            {{ request.adopterData.firstName }}
                            {{ request.adopterData.lastName }}

                            <span class="">
                              <b-image
                                class="image is-128x128 content has-text-centered center mt-2"
                                :src="
                                  processUserLink(request.adopterData.photoUri)
                                "
                              ></b-image>
                              <b-rate
                                v-model="
                                  request.adopterData.adopterRating.average
                                "
                                disabled
                                icon="paw"
                                class="is-justify-content-center"
                              ></b-rate>
                              <p class="title is-4">
                                Perfil do Facebook:
                                <a :href="request.adopterData.facebookProfile"
                                  ><b-icon icon="facebook" size="is-medium">
                                  </b-icon
                                ></a>
                              </p>
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

                      <div class="content">
                        <b-button type="is-primary is-uppercase"
                          >Abrir conversa
                        </b-button>

                        <b-button
                          class="ml-2"
                          @click="approve(request.id)"
                          type="is-primary"
                        >
                          <b-icon icon="check"></b-icon>
                        </b-button>

                        <b-button
                          class="ml-2"
                          @click="rejection(request.id)"
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
import { requestedProtectorAdoptions } from "../services/api";
import { approveAdoption } from "../services/api";
import { rejectAdoption } from "../services/api";
import petHelpersMixin from "../mixins/petHelpers";

export default {
  mixins: [petHelpersMixin],
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      requestsData: [],
    };
  },
  mounted() {
    this.updateRequests();
  },
  methods: {
    rateTransform(rating) {
      if (rating == null) {
        rating = 0.0;
      }
      return rating;
    },
    approve(id) {
      approveAdoption(id)
        .then(() => {
          this.$buefy.dialog.confirm({
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
              this.updateRequests();
            },
          });
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
      rejectAdoption(id)
        .then(() => {
          this.$buefy.dialog.confirm({
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
              this.updateRequests();
            },
          });
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
</style>
