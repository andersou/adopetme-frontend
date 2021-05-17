<template>
  <div class="container">
    <h1 class="is-size-2 is-uppercase has-text-weight-light mt-4">
      Bem vindo, $USUARIO
    </h1>
    <h2 class="is-size-4 mb-2">O que deseja fazer?</h2>
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
              <span> Clique <a href="#">aqui</a> e vamos começar !</span>
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
              <span> Clique <a href="#">aqui</a> e vamos começar !</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
}
</style>
