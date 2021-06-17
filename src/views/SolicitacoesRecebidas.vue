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
                        {{request.petData.name}}
                        <span class="is-size-6 is-italic has-text-weight-light">
                          {{calculateAge(request.petData._birthdayDate)}}
                        </span>
                        <span class="is-size-6 is-italic has-text-weight-light">
                            <p>
                          {{petSizeTransform(request.petData._size)}}
                            </p>
                        </span>
                      </p>
                    </div>

                    <div class="column">
                        <p class="title is-4">
                        {{request.adopterData.firstName}}

                        <span class="">
                          <b-image
                          class="image is-128x128 content has-text-centered"
                          :src="processPetsLink(request.adopterData.photoUri)"
                        ></b-image>
                        <b-rate :v-model="rateTransform(request.adopterData.adopterRating.average)" icon="paw" class="is-justify-content-center"></b-rate>
                            <p class="title is-4">
                              Perfil do Facebook:
                          <a :href="request.adopterData.facebookProfile"
                              ><b-icon icon="facebook" size="is-medium"> </b-icon
                          ></a>
                            </p>
                        </span>
                      </p>
                      <p class="title is-4">
                        Recebida há: 
                        <span class="is-size-6 has-text-weight-light">
                          {{calculateAge(request.adopterData._createdAt)}}
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
import moment from "moment";
import "moment/locale/pt-br";
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
      processPetsLink(link) {
      if (!link) return "";
      //http://google.com/mathaus.png
      //Mathaus.png ~> http://localhost:3000/image/pets/mathaus.png
      if (link.startsWith("http")) {
        return link;
      } else {
        if (!link.startsWith("/")) link = "/" + link;
        return `${process.env.VUE_APP_API_URL}/images/pets${link}`;
        }
      },
      calculateAge(birthdayDate) {
        return moment(birthdayDate).fromNow(true);
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
      rateTransform(rating){
        if(rating == null){
          rating = 0.0
        }
        return rating;
      },
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