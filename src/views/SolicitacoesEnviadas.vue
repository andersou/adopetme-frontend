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
                    Estes são todos os pets que você demonstrou interesse em adotar!
                    </h1>


          <div v-if="requestsData.length" class="columns is-multiline tuble">
            <div v-for="request in requestsData" class="column is-half" :key="request.id">
              <!-- Pet-card (separar em componente) -->
              <div class="card">
                 <div class="card-content">
                  <div class="media">
                      <div class="media-left is-relative">

                      </div>
                    <div class="media-content">
                      <p class="title is-4">
                        {{ request.petId }}
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    (Deixar igual ao card meus pets)
                  </div>

                  <div class="content">

                    <b-button
                      tag="router-link"
                      :to="{ path: '' }"
                      type="is-primary is-uppercase"
                      >Abrir conversa
                    </b-button>

                    <b-button
                    class="ml-2"
                      tag="router-link"
                      :to="{ path: '' }"
                      type="is-danger is-uppercase"
                      >Cancelar solicitação
                    </b-button>

                  </div>

                  </div><!-- Fim conteúdo do card -->
                </div><!-- Fim card secundário (pets) -->
            </div><!-- Fim laço for -->
          </div><!-- Fim if primário -->

                   <section v-else class="hero">
                      <div class="container has-text-centered">
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
                        type="is-primary">
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
//import { requestedAdoptions } from "../services.api";
import { requestedAdopterAdoptions } from "../services/api";

export default {
    computed: {
        ...mapState(["user"])
  },
  mounted(){

    requestedAdopterAdoptions()
      .then((res) => {
        this.requestsData = res.data;
        //console.log(this.requestsData);
      });

  },
  data(){
      return{
          requestsData: [],
      };

  },
  methods: {
      limparLista(){
          this.requestsData = []
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
</style>