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
                @keyup.enter="login"
              >
              </b-input>
            </b-field>
            <b-button @click="login" type="is-primary">Entrar</b-button>
            <b-button
              class="ml-4"
              @click="loginFacebook"
              type="is-primary-outline"
              >Entrar com Facebook
              <b-icon
                icon="facebook"
                class="ml-1 content has-text-centered"
                type="is-primary"
              >
              </b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { loginFacebook } from "../services/api";

export default {
  name: "Home",
  components: {},
  data() {
    return { email: "", password: "", error: false };
  },
  methods: {
    ...mapActions(["loginUser", "loginUserByToken"]),
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
    loginFacebook() {
      window.FB.login(
        (response) => {
          console.log(response);
          if (response.status == "connected")
            if (response.authResponse) {
              loginFacebook(response.authResponse.accessToken).then((res) => {
                this.loginUserByToken(res.data.token).then(() => {
                  window.sessionStorage.setItem("token", res.data.token);
                  this.$router.push("/dashboard");
                });
              });
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
        },
        { scope: "email,public_profile" }
      );
    },
  },
  computed: { ...mapState(["user"]) },
  watch: {
    user(newUser) {
      if (newUser.id) this.$router.push("/dashboard");
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
