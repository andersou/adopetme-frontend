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
                   <section class="hero">
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

export default {
    computed: {
    ...mapState(["user"]),
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