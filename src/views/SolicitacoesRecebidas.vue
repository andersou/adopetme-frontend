<template>
<main>
    <div class="container pt-6 pb-4">
        <div class="columns">
            <div class="column">
                <div class="card ">
                    <div class="card-content">
                    <h1 class="is-size-3 is-uppercase has-text-weight-light">
                        {{user.firstName}}, 
                    </h1>
                    <h1 class="is-size-6 has-text-weight-light mb-4 is-uppercase">
                    Estes são todos os usuários que desejam adotar um pet seu!
                    </h1>


          <div v-if="requestsData.length" class="columns is-multiline tuble">
            <div v-for="request in requestsData" class="column is-half" :key="request.id">
              <!-- Pet-card (separar em componente) -->
              <div class="card">
                 <div class="card-content">
                  <div class="media">
                      <div class="media-left is-relative">

                      </div>
                    <div class="media-content center">
                      <p class="title is-4">
                        Solicitação {{ request.id }}
                        <b-tag v-if="!request.approvedAt && !request.cancelledAt" type="is-primary">Aguardando</b-tag>
                        <b-tag v-if="request.approvedAt" type="is-success">Aprovada</b-tag>

                        <b-tag v-if="request.cancelledAt" type="is-danger">Rejeitada</b-tag>

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
                        Bolotinha
                        <span class="is-size-6 is-italic has-text-weight-light">
                          5 Meses
                        </span>
                        <span class="is-size-6 is-italic has-text-weight-light">
                            <p>
                          Pequeno
                            </p>
                        </span>
                      </p>
                    </div>

                    <div class="column">
                        <p class="title is-4">
                        Carlos
                        <span class="is-size-6 has-text-weight-light">
                          Nota
                        </span>

                        <span class="is-size-6 is-italic has-text-weight-light">
                            <p>
                          Facebook.com
                            </p>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    <b-button
                      type="is-primary is-uppercase"
                      >Abrir conversa
                    </b-button>

                    <b-button
                      class="ml-2"
                      @click="approve(request.id)"
                      type="is-primary">
                      <b-icon icon="check"></b-icon>
                    </b-button>

                    <b-button
                      class="ml-2"
                      @click="rejection(request.id)"
                      type="is-danger">
                      <b-icon icon="close"></b-icon>
                    </b-button>

                  </div>

                  </div><!-- Fim conteúdo do card -->
                </div><!-- Fim card secundário (pets) -->
            </div><!-- Fim laço for -->
          </div><!-- Fim if primário -->



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
                        type="is-primary">
                        Adicionar Pet
                        </b-button>

                        <b-button
                        class="mr-4"
                        tag="router-link"
                        :to="{ path: '/my-pets' }"
                        type="is-primary">
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

export default {
    computed: {
    ...mapState(["user"]),
  },
  data(){
      return{
          requestsData: [],
      };

  },
  mounted(){
    this.updateRequests();
 
  },
  methods: {
      approve(id){
          approveAdoption(id).then(() => {
              this.$buefy.toast.open({
                    message: 'Something happened correctly!',
                    type: 'is-success'
                })

                this.updateRequests();
          }).catch(() => {
            this.$buefy.toast.open({
                    message: "Something's not good, also I'm on <b>bottom</b>",
                    type: 'is-danger'
            })
        });
      },
      rejection(id){
        rejectAdoption(id).then(() => {
                this.$buefy.toast.open({
                    message: 'Something happened correctly!',
                    type: 'is-success'
                })

                this.updateRequests();
        }).catch(() => {
            this.$buefy.toast.open({
                    message: "Something's not good, also I'm on <b>bottom</b>",
                    type: 'is-danger'
            })
        });
      },
      updateRequests(){
          requestedProtectorAdoptions()
            .then((res) => {
            this.requestsData = res.data;
            console.log(this.requestsData);
            });
      }
  }
}
</script>

<style lang="scss" scoped>
    main{
        background:   url(../assets/capa.png),
                      url(../assets/ruido.png),
                      linear-gradient(110deg, $adopetme-logo-color, $primary);
        background-attachment: fixed;
        min-height: calc(100vh - 52px)
    }

    .center{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
</style>