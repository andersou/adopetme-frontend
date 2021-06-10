<template>
  <div class="home is-flex is-justify-content-space-around">
    <img src="../assets/home-image.svg" class="image home-image" />
    <div>
      <div class="card card-login">
        <div class="card-content">
          <div class="content">
            <b-field label="Email" :type="{ 'is-danger': error }">
              <b-input
                type="email"
                placeholder="jon@arbuckle.com"
                v-model="email"
              >
              </b-input>
            </b-field>

            <b-field label="Senha" :type="{ 'is-danger': error }">
              <b-input
                type="password"
                placeholder="********"
                v-model="password"
              >
              </b-input>
            </b-field>
            <b-button @click="login" type="is-primary is-light"
              >Entrar</b-button
            >
            <b-button
                class="ml-4"
                tag="router-link"
                :to="{ path: '/registro' }"
                type="is-primary"
                >Criar conta</b-button
              >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return { email: "", password: "", error: false };
  },
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      this.loginUser({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => (this.error = true));
    },
  },
};
</script>
<style lang="scss" scoped>
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
    top: 5rem;
    max-height: 90%;
    max-width: 90%;
  }
  .home {
    min-height: calc(100vh - #{$adopetme-navbar-height});
  }
  .card-login {
    background-color: rgba(255, 255, 255, 0.95);
  }
}
</style>
