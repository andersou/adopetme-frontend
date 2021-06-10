<template>
  <main>
    <div class="columns">
      <div class="column is-half f1">
        <div class="">
          <b-carousel :progress="progress" :progress-type="progressType">
            <b-carousel-item
              v-for="petPhoto in petData.petPhotos"
              :key="petPhoto.id"
            >
              <b-image
                class="image"
                :src="processPetsLink(petPhoto.photoUri)"
              ></b-image>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>

      <div class="column">
        <div class="columns ">
          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="dog" size="is-small"></b-icon>
              Nome
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              {{ petData.name }}
            </h1>
          </div>

          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="dog" size="is-small"></b-icon>
              Idade
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              {{ calculateAge(petData._birthdayDate) }}
            </h1>
          </div>

          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="dog" size="is-small"></b-icon>
              Localização
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              Pelotas, RS
            </h1>
          </div>
        </div>

        <div class="columns ">
          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="cat" size="is-small"></b-icon>
              Animal
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              {{ { 0: "Outro", 1: "Cachorro", 2: "Gato" }[petData._specie] }}
            </h1>
          </div>

          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="foot-print" size="is-small"></b-icon>
              Porte
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              {{ petSizeTransform(petData._size) }}
            </h1>
          </div>

          <div class="column">
            <h1 class="is-size-7 is-uppercase mt-4 Minmargin">
              <b-icon icon="gender-male-female" size="is-small"></b-icon>
              Sexo
            </h1>
            <h1 class="is-size-4 is-uppercase has-text-weight-bold">
              {{ petData.sex == "M" ? "Macho" : "Fêmea" }}
            </h1>
          </div>
        </div>
        <div class="Highmargin">
          <h1 class="is-size-6 has-text-weight-bold is-uppercase">
            <b-icon icon="dog" size="is-small"></b-icon>
            Breve história:
          </h1>
        </div>
        <div class="Lowmargin">
          <h2 class="is-size-7 is-uppercase left">
            {{ petData.simpleDescription }}
          </h2>
        </div>

        <div class="Highmargin">
          <h1 class="is-size-6 has-text-weight-bold is-uppercase">
            <b-icon icon="dog" size="is-small"></b-icon>
            História
          </h1>
        </div>

        <div class="Lowmargin">
          <div
            class="is-size-7 is-uppercase left"
            v-html="petData.detailedDescription"
          ></div>
        </div>

        <div v-if="userData.id">
          <h2 class="Highmargin">
            <b-button
              label="Solicitar adoção"
              type="is-success"
              size="is-medium"
              @click="confirmCustom"
            />
          </h2>
        </div>
        <div v-if="!userData.id">
          <h2 class="Highmargin">
            <b-button
              label="Solicitar adoção"
              type="is-success"
              size="is-medium"
              @click="confirmError"
            />
          </h2>
        </div>
      </div>
    </div>

    <section id="content">
      <h1 class="is-size-4 is-uppercase has-text-weight-bold mt-4">
        <div class="column">
          <h1 class="is-size-4 is-uppercase has-text-weight-bold mt-4">
            Informações sobre o protetor
          </h1>

          <div
            class="is-flex is-flex-wrap-wrap is-justify-content-center Lowmargin"
          >
            <div class="box mx-2 ">
              <h2>Nome Usuário</h2>
              <h3>Nota</h3>
              <h3>Rede social</h3>
              <article class="media">
                <div class="media-center">
                  <figure class="image is-128x128">
                    <img src="../assets/hp-image.png" />
                  </figure>
                </div>
                <div class="media-content"></div>
              </article>
            </div>
          </div>
        </div>
      </h1>
    </section>
  </main>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";
import { getPet } from "../services/api";
import { getUser } from "../services/api";
import router from "vue-router";
export default {
  props: ["petId","userId"],
  mounted() {
    // console.log(this.petId + " ");
    // console.log(this.$route.params);
    // this.loadPets();
    getPet(this.petId)
      .then((res) => {
        this.petData = res.data;
      })
      .catch(() => {
        this.$router.push("/adote-pet");
      });
     getUser(this.userId)
      .then((res) => {
        this.userData = res.data;
      })
  },
  components: {},
  data() {
    return {
      progress: false,
      progressType: "is-primary",

      petData: {
        petPhotos: [],
      },
      userData: {
        users: [],
      },
    };
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
        return `${process.env.VUE_APP_API_URL}/image/pets${link}`;
      }
    },
    // getPetPhoto(pet) {
    //   if (pet.petPhotos[0] && pet.petPhotos[0].photoUri)
    //     return this.processPetsLink(pet.petPhotos[0].photoUri);

    //   return "";
    // },
    // loadPets() {
    //   console.log(this.sort);
    //   getPets(this.currentPage, this.filters, this.sort)
    //     .then((r) => {
    //       this.petsData = r.data;
    //     })
    //     .catch(() => {
    //       this.petsData = {};
    //     });
    // },
    // loadUser() {
    //   return getUser();
    // },
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
    calculateAge(birthdayDate) {
      return moment(birthdayDate).fromNow(true);
    },
    confirmCustom() {
      this.$buefy.dialog.confirm({
        title: "Confirmação da solicitação de adoção",
        message: `Ao confirmar a solicitação você afirma interesse na adoção do Pet.
                    <p></p>
                    O protetor entrará em contato para se certificar que você realmente combina com o animalzinho.`,
        cancelText: "Vou pensar mais um pouco.",
        confirmText: "Quero adotar!",
        type: "is-success",
        onConfirm: () =>
          this.$buefy.toast.open("Solicitação feita com sucesso!"),
      });
    },
    confirmError() {
                this.$buefy.dialog.confirm({
                    title: 'Você não está logado',
                    message: 'Faça um <b>registro</b> e crie uma conta, ou efetue login no sistema!',
                    confirmText: 'Criar conta',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => router.push({ path: '/registro' })
                });
            },
  },
};
</script>

<style lang="scss" scoped>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  height: 100%;
  filter: grayscale(100%);
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
  color: dimgray;
}
h3 {
  color: dimgray;
}
.left {
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
}
.Minmargin {
  padding-top: 4px;
}
.Lowmargin {
  padding-top: 10px;
}
.Mediummargin {
  padding-top: 25px;
}
.Highmargin {
  padding-top: 50px;
}
.Maxmargin {
  padding-top: 80px;
}
.Fullmargin {
  padding-top: 100px;
}
.f1 {
  padding-left: 0px;
}
#content {
  background: url(../assets/capa.png), url(../assets/ruido.png),
    linear-gradient(110deg, #573589, #F37CFA);
  background-attachment: fixed;
  height: 100%;
  color: white;
}
.FullHeight {
  height: 100%;
}
.border {
  border-top-style: dashed;
  border-left-style: inset;
  border-right-style: ridge;
}
</style>
