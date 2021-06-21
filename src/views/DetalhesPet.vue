<template>
  <main>
    <div class="card tubble">
      <div class="card-content">
    <div class="columns">
      <div class="column is-two-fifths f1">
          <b-carousel :progress="progress" :progress-type="progressType">
            <b-carousel-item
              v-for="petPhoto in petData.petPhotos"
              :key="petPhoto.id"
              class="bordas"
            >
              <b-image
                class="image"
                :src="processPetsLink(petPhoto.photoUri)"
              ></b-image>
            </b-carousel-item>
          </b-carousel>         
           <div class="column ">
          <div class="box mx-2">
            <div class="columns">
              <div class="column">
            <p class="is-size-3 center">{{ petData.protectorData.firstName }}</p>
            <article class="media is-justify-content-center mt-2 mb-2">
              <figure
                v-if="petData.protectorData.photoUri"
                class="image media-center"
              >
                <img
                  class="is-rounded"
                  :src="processUserLink(petData.protectorData.photoUri)"
                />
              </figure>
            </article>
              </div>
              <div class="column mt-4">
              <div class="center">
              <h1 class="center is-size-5">Perfil do Facebook</h1>
              <a :href="petData.protectorData.facebookProfile"
                class="is-justify-content-center"><b-icon icon="facebook" class="is-justify-content-center" size="is-medium"> </b-icon
              ></a>
              </div>
              <div class="mt-2 center">
               <p class="is-size-5">Nota do Usuário
              <!-- <p><b-icon icon="map-marker-outline" size="is-small"></b-icon> {{petData.protector.city}}</p> -->
              <b-rate
                v-model="petData.protectorData.protectorRating.average"
                icon="paw"
                disabled
                class="is-justify-content-center"
              ></b-rate>
              <!-- Substituir para receber nota do db? -->
              </p>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="column is-three-fifths">
        <div class="card">
        <div class="card-content">
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

        <div>
          <h2 class="Highmargin">
            <b-button
              v-if="!petData.hasRequested"
              label="Solicitar adoção"
              type="is-success"
              size="is-medium"
              @click="doAdoption"
            />
            <b-button
              v-else
              label="Solicitação encaminhada"
              type="is-success"
              size="is-medium"
              disabled
            />
          </h2>
        </div>
        
      </div>
       
    </div>
      </div>

      </div>
    </div>
      </div>
  </main>
</template>

<script>
import "moment/locale/pt-br";
import { mapState } from "vuex";
import { createAdoption, getPet } from "../services/api";
import petHelperMixin from "../mixins/petHelpers";
export default {
  props: ["petId", "userId"],
  mixins: [petHelperMixin],
  mounted() {
    // console.log(this.petId + " ");
    // console.log(this.$route.params);
    // this.loadPets();
    this.loadPet();
  },
  components: {},
  data() {
    return {
      rate: 4.6, //Esse valor eh a nota armazenada no bd do user

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
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    doAdoption() {
      if (this.user.id) {
        this.confirmAdoption();
      } else {
        this.createAccount();
      }
    },
    confirmAdoption() {
      this.$buefy.dialog.confirm({
        title: "Confirmação da solicitação de adoção",
        message: `Ao confirmar a solicitação você afirma interesse na adoção do Pet.
                    <p></p>
                    O protetor entrará em contato para se certificar que você realmente combina com o animalzinho.`,
        cancelText: "Vou pensar mais um pouco.",
        confirmText: "Quero adotar!",
        type: "is-success",
        onConfirm: () => {
          createAdoption(this.petId)
            .then(() => {
              this.$buefy.toast.open("Solicitação feita com sucesso!");
              this.petData.hasRequested = true;
            })
            .catch(() => {
              this.$buefy.toast.open({
                message: "Você não pode adotar um pet que é seu!",
                type: "is-danger",
              });
            });
        },
      });
    },

    createAccount() {
      this.$buefy.dialog.confirm({
        title: "Você não está logado",
        message:
          "Você precisa estar logado para solicitar uma adoção, <b>crie uma conta</b> ou efetue login no sistema!",
        confirmText: "Criar conta",
        cancelText: "Cancelar",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$router.push({ path: "/registro" }),
      });
    },
    loadPet() {
      return getPet(this.petId)
        .then((res) => {
          this.petData = res.data;
        })
        .catch(() => {
          this.$router.push("/adote-pet");
        });
    },
  },
  watch: {
    user() {
      this.loadPet;
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
  margin-top: 50px;
}
.FullHeight {
  height: 100%;
}
.border {
  border-top-style: dashed;
  border-left-style: inset;
  border-right-style: ridge;
}
.image {
  max-width: 900px;
  max-height: 700px;
  justify-content: center;
}
.tubble{
  background: linear-gradient(110deg, $primary, $adopetme-logo-color);
  height: 100%;
}
.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.box{
  background-color: rgb(54, 54, 54);
  color:white;
}

</style>
