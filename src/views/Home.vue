<template>
  <div class="home is-flex is-justify-content-space-around">
    <img src="../assets/home-image.svg" class="image home-image" />
    <div>
      <div class="card card-login">
        <div class="card-content">
          <div class="content">
            <b-field label="Email">
              <b-input type="email" value="john@arbucle.com" maxlength="30">
              </b-input>
            </b-field>

            <b-field label="Senha">
              <b-input type="password" value="iwantmytreasure" password-reveal>
              </b-input>
            </b-field>
            <b-button type="is-primary is-light">Entrar</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.home-image {
  width: 50%;
  transform: translateY(-10%);
}
.card-login {
  margin-top: 7rem;
}
</style>
