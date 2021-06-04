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
                    <div class="content has-text-centered">
                        <h1 class="is-size-4">
                            Você ainda não recebeu nenhuma solicitação de adoção!
                        </h1>
                      <img
                          class="image-adopt"
                          src="../../src/assets/no-adoptions2.svg"
                          alt=""
                          srcset=""
                        />  
                    <b-button
                        class="mr-4"
                        tag="router-link"
                        :to="{ path: '/adote-pet' }"
                        type="is-primary"
                        >Adicione um amiguinho para doar!</b-button
                    >
                    <b-button
                        tag="router-link"
                        :to="{ path: '/adote-pet' }"
                        type="is-primary"
                        >Edite as informações dos seus pets</b-button
                    >
                    </div>
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
    .image-adopt{
        width: 500px; 
        height: 500px;
        display: flex;
    }
</style>