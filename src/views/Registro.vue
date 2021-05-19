<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <div class="container">
                <div
                  class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6 mb-6"
                >
                  <figure class="image ">
                    <img
                      class="img-avatar is-rounded"
                      v-if="imageData"
                      :src="imageData"
                      alt=""
                    />
                    <img
                      v-else
                      class="img-avatar"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Blank&hatColor=PastelGreen&facialHairType=Blank&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    />
                  </figure>
                  <b-field label="Foto Pessoal" class=" has-text-centered">
                    <b-upload
                      v-model="avatar"
                      accept="image/png,  image/jpeg"
                      drag-drop
                    >
                      <section class="section">
                        <div class="content has-text-centered">
                          <p>
                            <b-icon icon="upload" size="is-large"> </b-icon>
                          </p>
                          <p>Arraste a foto aqui</p>
                        </div>
                      </section>
                    </b-upload>
                  </b-field>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <b-field label="Nome *">
                    <b-input
                      placeholder="Nome"
                      type="text"
                      v-model="register.firstName"
                      validation-message="Entre com um nome válido"
                      pattern="[A-ZA-z]*"
                      minlength="3"
                      maxlength="255"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Sobrenome *">
                    <b-input
                      type="text"
                      placeholder="Sobrenome"
                      v-model="register.lastName"
                      validation-message="Entre com um sobrenome válido"
                      pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*"
                      minlength="3"
                      maxlength="255"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="CPF *">
                    <b-input
                      type="text"
                      placeholder="CPF"
                      validation-message="Entre com um documento válido"
                      v-model="register.document"
                      v-mask.raw="['###.###.###-##']"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Gênero *" v-model="register.sex">
                    <b-select placeholder="Selecione o gênero" expanded>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="B">Não binário</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Email *">
                    <b-input
                      v-model="register.email"
                      placeholder="Email"
                      type="email"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Perfil do Facebook">
                    <b-input
                      v-model="register.facebookProfile"
                      placeholder="URL"
                      type="url"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <b-field label="Data de nascimento *">
                    <b-datepicker
                      ref="datepicker"
                      expanded
                      placeholder="Select a date"
                    >
                    </b-datepicker>
                    <b-button
                      @click="$refs.datepicker.toggle()"
                      icon-left="calendar-today"
                      type="is-primary"
                      v-model="register.birthdayDate"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Telefone">
                    <b-input
                      type="text"
                      placeholder="Fone"
                      validation-message="Entre com um telefone válido"
                      v-model="register.phone"
                      
                      v-mask.raw="['+55 (##) # ####-####']"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="CEP">
                    <b-input
                      type="text"
                      placeholder="CEP"
                      validation-message="Entre com um CEP válido"
                      v-model="register.zipcode"
                      v-mask="['#####-###']"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Bairro">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Bairro"
                      v-model="register.neighborhood"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6">
                  <b-field label="Rua">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Rua"
                      v-model="register.address"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Número">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Número"
                      validation-message="Entre com um número"
                      v-model="register.number"
                      pattern="[0-9]*"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Complemento">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Complemento"
                      v-model="register.complement"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Estado">
                    <b-select
                      placeholder="Selecione o estado"
                      @input="loadMunicipios"
                      v-model="register.state"
                      expanded
                    >
                      <option
                        v-for="estado in estados"
                        :key="estado.id"
                        :value="estado.sigla"
                        >{{ estado.nome }}</option
                      >
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Municipio">
                    <b-select
                      placeholder="Selecione o municipio"
                      v-model="register.city"
                      :disabled="!register.state"
                      expanded
                    >
                      <option v-if="!register.state" value=""
                        >Selecione o estado primeiro</option
                      >
                      <option
                        v-else
                        v-for="municipio in municipios"
                        :key="municipio.id"
                        :value="municipio.nome"
                        >{{ municipio.nome }}</option
                      >
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Senha" class="">
                    <password
                      v-model="register.password"
                      maxlength="60"
                      :secureLength="8"
                    >
                    </password>
                  </b-field>
                </div>
                <div class="column">
                  <b-field
                    label="Confirmação de senha"
                    :type="{ 'is-danger': !errors.passwordConfirmed }"
                    :message="{
                      'Senha diferente da inserida anteriormente': !errors.passwordConfirmed,
                    }"
                  >
                    <b-input
                      type="password"
                      v-model="passwordConfirm"
                      @input="
                        errors.passwordConfirmed =
                          register.password == passwordConfirm
                      "
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="buttons">
                    <b-button type="is-primary" @click="doRegister" outlined
                      >Registrar</b-button
                    >
                  </div>
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
import Password from "vue-password-strength-meter";
import { getEstados, getMunicipios } from "../services/ibge";
import { registerUser } from "../services/api";
import {mask} from 'vue-the-mask';
export default {
  name: "Registro",
  components: { Password },
  directives: {
    mask(el, binding) {
      binding.value ? mask(el, binding) : (el.oninput = null)
    }
  },

  data() {
    return {
      avatar: null,
      imageData: null,
      passwordConfirm: "",
      errors: {
        passwordConfirmed: true,
      },
      estados: [],
      municipios: [],
      register: {
        firstName: "", //
        lastName: "", //
        birthdayDate: new Date(), //
        phone: "", //
        email: "", //
        sex: "M", //
        password: "", //
        facebookProfile: "", //
        document: "", //
        address: "", //
        number: 0, //
        complement: "", //
        neighborhood: "", //
        city: "", //
        state: "", //
        zipcode: "", //
      },
    };
  },
  mounted() {
    getEstados().then((resp) => {
      this.estados = resp.data;
    });
  },

  methods: {
    loadMunicipios() {
      console.log("Pegando cidades");
      if (this.register.state) {
        return getMunicipios(this.register.state).then(
          (resp) => (this.municipios = resp.data)
        );
      } else return [];
    },
    validatePassword() {
      // erro.passwordConfirmed = this.;
    },
    doRegister() {
      if (this.register.password != this.passwordConfirm) {
        this.$buefy.toast.open({
          message: "Senha não confere!",
          type: "is-danger",
        });
        return;
      }
      let formData = new FormData();
      for (let prop in this.register) {
        if (this.register[prop]) formData.set(prop, this.register[prop]);
      }
      formData.set("avatar", this.avatar);
      formData.set(
        "birthdayDate",
        this.register.birthdayDate
          .toISOString()
          .split("T")[0]
          .replaceAll("-", "/")
      );
      console.log(formData);
      registerUser(formData)
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch(() => {
          this.$buefy.toast.open({
            message: "Ocorreu um erro ao efetuar o registro.",
            type: "is-danger",
          });
        });
      //instanciar formdata
      //preencher formdata
      //colocar a imagem
      //enviar
    },
    deleteDropFile() {
      this.avatar = null;
    },
    previewImage: function() {
      if (this.avatar) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(this.avatar);
      }
    },
  },
  watch: {
    avatar(newAvatar) {
      if (newAvatar) {
        this.previewImage();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img-avatar {
  max-width: 280px;
}
@include tablet {
  .img-avatar {
    margin-right: 3rem;
  }
}
main {
  background: url(../assets/capa.png), url(../assets/ruido.png),
    linear-gradient(110deg, rgb(20, 16, 63), rgb(17, 81, 92));
  background-attachment: fixed;
  min-height: calc(100vh - #{$adopetme-navbar-height});
}
</style>
