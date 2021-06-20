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
                  <div class="is-relative">
                    <div
                      style="position: absolute;
    z-index: 1;"
                    >
                      <b-button
                        type="is-danger"
                        @click="removePhoto"
                        v-if="imageData"
                      >
                        <b-icon icon="close"
                      /></b-button>
                    </div>
                    <figure class="image ">
                      <img
                        class="img-avatar is-rounded"
                        v-if="imageData"
                        :src="imageData"
                        alt=""
                      />
                      <img v-else class="img-avatar" src="~assets/avatar.svg" />
                    </figure>
                  </div>

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
                  <b-field
                    label="Nome *"
                    :type="{ 'is-danger': isError('firstName') }"
                    :message="getErrorMessage('firstName')"
                  >
                    <b-input
                      placeholder="Nome"
                      type="text"
                      v-model="register.firstName"
                      validation-message="Entre com um nome válido"
                      pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*"
                      minlength="3"
                      maxlength="255"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field
                    label="Sobrenome *"
                    :type="{ 'is-danger': isError('lastName') }"
                    :message="getErrorMessage('lastName')"
                  >
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
                  <b-field
                    label="CPF *"
                    :type="{ 'is-danger': isError('document') }"
                    :message="getErrorMessage('document')"
                  >
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
                  <b-field
                    label="Gênero *"
                    :type="{ 'is-danger': isError('sex') }"
                    :message="getErrorMessage('sex')"
                  >
                    <b-select
                      v-model="register.sex"
                      placeholder="Selecione o gênero"
                      expanded
                    >
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="N">Outro</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field
                    label="Email *"
                    :type="{ 'is-danger': isError('email') }"
                    :message="getErrorMessage('email')"
                  >
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
                  <b-field
                    label="Perfil do Facebook"
                    :type="{ 'is-danger': isError('facebookProfile') }"
                    :message="getErrorMessage('facebookProfile')"
                  >
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
                  <b-field
                    label="Data de nascimento *"
                    :type="{ 'is-danger': isError('birthdayDate') }"
                    :message="getErrorMessage('birthdayDate')"
                  >
                    <b-datepicker
                      ref="datepicker"
                      expanded
                      placeholder="Select a date"
                      v-model="register.birthdayDate"
                    >
                    </b-datepicker>
                    <b-button
                      @click="$refs.datepicker.toggle()"
                      icon-left="calendar-today"
                      type="is-primary"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field
                    label="Telefone"
                    :type="{ 'is-danger': isError('phone') }"
                    :message="getErrorMessage('phone')"
                  >
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
                  <b-field
                    label="CEP"
                    :type="{ 'is-danger': isError('zipcode') }"
                    :message="getErrorMessage('zipcode')"
                  >
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
                  <b-field
                    label="Bairro"
                    :type="{ 'is-danger': isError('neighborhood') }"
                    :message="getErrorMessage('neighborhood')"
                  >
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
                  <b-field
                    label="Rua"
                    :type="{ 'is-danger': isError('address') }"
                    :message="getErrorMessage('address')"
                  >
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
                  <b-field
                    label="Número"
                    :type="{ 'is-danger': isError('number') }"
                    :message="getErrorMessage('number')"
                  >
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
                  <b-field
                    label="Complemento"
                    :type="{ 'is-danger': isError('complement') }"
                    :message="getErrorMessage('complement')"
                  >
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
                  <b-field
                    label="Estado"
                    :type="{ 'is-danger': isError('state') }"
                    :message="getErrorMessage('state')"
                  >
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
                  <b-field
                    label="Municipio"
                    :type="{ 'is-danger': isError('city') }"
                    :message="getErrorMessage('city')"
                  >
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
                  <b-field
                    label="Senha"
                    class=""
                    :type="{ 'is-danger': isError('password') }"
                    :message="getErrorMessage('password')"
                  >
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
                    <b-button
                      type="is-primary"
                      @click="doRegister"
                      outlined
                      :loading="isRegistering"
                      >{{ isEdit ? "Atualizar" : "Registrar" }}</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="isModalRegisterSuccessActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      @close="$router.replace('/')"
    >
      <div class="card">
        <div class="card-content">
          <div class="is-flex is-align-items-center">
            <b-icon icon="check-circle" size="is-large" type="is-success">
            </b-icon>
            <h1 class="pl-3">
              Registro realizado com sucesso!
            </h1>
          </div>
        </div>
      </div>
    </b-modal>
  </main>
</template>

<script>
import Password from "vue-password-strength-meter";
import { getEstados, getMunicipios } from "../../services/ibge";
import { deleteUserPhoto, registerUser, updateUser } from "../../services/api";
import { mask } from "vue-the-mask";
import petHelpersMixin from "../../mixins/petHelpers";
export default {
  name: "Registro",
  props: ["user"],
  mixins: [petHelpersMixin],
  components: { Password },
  directives: {
    mask(el, binding) {
      binding.value ? mask(el, binding) : (el.oninput = null);
    },
  },

  data() {
    return {
      formErrors: [],
      avatar: null,
      imageData: null,
      passwordConfirm: "",
      errors: {
        passwordConfirmed: true,
      },
      isModalRegisterSuccessActive: false,
      isRegistering: false,
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
      console.log("carregou estados");
    });
  },

  methods: {
    removePhoto() {
      if (this.isEdit) {
        if (this.imageData && this.imageData.startsWith("http")) {
          return deleteUserPhoto()
            .then(() => {
              this.avatar = null;
              this.imageData = "";
              this.$buefy.toast.open({
                message: "Foto removida com sucesso!.",
                type: "is-primary",
              });
            })
            .catch(() => {
              this.$buefy.toast.open({
                message: "Ocorreu um erro ao remover a foto.",
                type: "is-danger",
              });
              return Promise.reject();
            });
        } else {
          this.avatar = null;
          this.imageData = "";
          return Promise.resolve;
        }
      } else {
        this.avatar = null;
        this.imageData = "";
        return Promise.resolve();
      }
    },
    populateRegisterUser(newUser) {
      if (newUser && newUser.id)
        for (let key in newUser) {
          if (["_createdAt", "_birthdayDate"].includes(key)) {
            newUser[key] = this.$moment(newUser[key]).toDate();
          }
          this.register[key.startsWith("_") ? key.substring(1) : key] =
            newUser[key];
        }

      this.imageData = this.processUserLink(newUser.photoUri);
      if (newUser.state) this.loadMunicipios();
    },
    isError(field) {
      return !!this.getErrorMessage(field);
    },
    getErrorMessage(field) {
      if (!this.formErrors) return "";
      let result = this.formErrors.find((error) => error.param == field);

      if (result) {
        return result.msg;
      }
      return "";
    },
    loadMunicipios() {
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
      if (!this.isEdit || (this.isEdit && this.register.password))
        if (this.register.password != this.passwordConfirm) {
          this.$buefy.toast.open({
            message: "Senha não confere!",
            type: "is-danger",
          });
          return;
        }
      this.isRegistering = true;
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
      formData.set("document", this.register.document.replace(/[.-]/g, ""));
      if (this.register.phone)
        formData.set("phone", this.register.phone.replace(/[ ()-]/g, ""));
      this.formErrors = [];
      if (this.isEdit) {
        updateUser(formData)
          .then(() => {
            this.$buefy.toast.open({
              message: "Dados atualizados com sucesso.",
              type: "is-success",
            });
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$buefy.toast.open({
              message: "Ocorreu um erro ao atualizar o registro.",
              type: "is-danger",
            });
          })
          .finally(() => {
            this.isRegistering = false;
          });
      } else
        registerUser(formData)
          .then(() => {
            this.isModalRegisterSuccessActive = true;
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$buefy.toast.open({
              message: "Ocorreu um erro ao efetuar o registro.",
              type: "is-danger",
            });
          })
          .finally(() => {
            this.isRegistering = false;
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
  computed: {
    isEdit() {
      return !!(this.user && this.user.id);
    },
  },
  watch: {
    avatar(newAvatar) {
      if (newAvatar) {
        this.previewImage();
      }
    },
    user(newUser) {
      console.log("mudou user");
      this.populateRegisterUser(newUser);
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
// main {
//   background: url(../assets/capa.png), url(../assets/ruido.png),
//     linear-gradient(110deg, rgb(20, 16, 63), rgb(17, 81, 92));
//   background-attachment: fixed;
//   min-height: calc(100vh - #{$adopetme-navbar-height});
// }
main {
  @include adopetme-background;
}
</style>
