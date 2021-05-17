<template>
  <div class="home is-flex is-justify-content-space-around">
    <img src="../assets/home-image.svg" class="image home-image" />
    <div>
      <div class="card card-login">
        <div class="card-content">
          <div class="content">
            <b-field label="Email">
              <b-input
                type="email"
                placeholder="jon@arbuckle.com"
                maxlength="30"
              >
              </b-input>
            </b-field>

            <b-field label="Senha">
              <b-input type="password" placeholder="********" password-reveal>
              </b-input>
            </b-field>
            <b-button
              tag="router-link"
              :to="{ path: '/dashboard' }"
              type="is-primary is-light"
              >Entrar</b-button
            >
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
<style scoped lang="scss">
.card-login {
  margin-top: 7rem;
}

@include tablet {
  .home {
    height: calc(100vh - #{$adopetme-navbar-height});
  }
  .home-image {
    width: 50%;
    max-height: 80%;
    top: 50%;
    transform: translateY(-50%);
    /* transform: translateY(-10%); */
  }
}

@include touch {
  .home-image {
    position: absolute;
    max-height: 90%;
    max-width: 90%;
  }
}
</style>
