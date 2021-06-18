<template>
  <div class="container content">
    <h1 class="is-size-2 is-uppercase has-text-weight-light mt-4">
      Bem vindo, {{ user.firstName }}
    </h1>
    <h2 class="is-size-4 mb-4">O que deseja fazer?</h2>
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Adotar um Pet
            </p>
            <p class="subtitle ellipsis">
              Conheça seu próximo peludinho ❤️
            </p>
            <figure class="image adopetme-figure">
              <img src="../assets/adoptme-1.svg" alt="" srcset="" />
            </figure>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <b-button
                tag="router-link"
                :to="{ path: '/adote-pet' }"
                type="is-primary"
                >Clique aqui e vamos começar!</b-button
              >
            </p>
          </footer>
        </div>
      </div>
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Colocar Pet para adoção
            </p>
            <p class="subtitle ellipsis">
              Ajude seu amiguinho a encontrar um novo lar ✨
            </p>
            <figure class="image adopetme-figure">
              <img src="../assets/adoptme-2.svg" alt="" srcset="" />
            </figure>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <b-button
                tag="router-link"
                :to="{ path: '/cadastro-pet' }"
                type="is-primary"
                >Clique aqui e vamos começar!</b-button
              >
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
.adopetme-figure {
  height: 250px;
}
.adopetme-figure img {
  height: 100%;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@include touch {
  .container {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
}
@include desktop {
  .column {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  // .content{
  // margin-bottom: 240px;
  // }
}
</style>
