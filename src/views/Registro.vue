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
                    <b-upload v-model="avatar" drag-drop>
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
                  <b-field label="Nome">
                    <b-input
                      placeholder="Nome"
                      type="text"
                      v-model="firstName"
                      validation-message="Entre com um nome válido"
                      pattern="[A-z]*"
                      minlength="3"
                      maxlength="255"
                      >></b-input
                    >
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Sobrenome">
                    <b-input
                      type="text"
                      placeholder="Sobrenome"
                      v-model="lastName"
                      validation-message="Entre com um sobrenome válido"
                      pattern="[A-z]*"
                      minlength="3"
                      maxlength="255"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="CPF">
                    <b-input
                      type="text"
                      maxlength="11"
                      minlength="11"
                      placeholder="CPF"
                      validation-message="Entre com um documento válido"
                      pattern="[0-9]*"
                      v-model="document"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Gênero">
                    <b-select placeholder="Gênero" expanded>
                      <option>Masculino</option>
                      <option>Feminino</option>
                      <option>Não binário</option>
                    </b-select>
                  </b-field>
                </div>
              </div>

              <b-field label="Perfil do Facebook">
                <b-input
                  v-model="facebookProfile"
                  placeholder="URL"
                  type="url"
                ></b-input>
              </b-field>

              <b-field label="Email">
                <b-input
                  v-model="email"
                  placeholder="Email"
                  type="email"
                ></b-input>
              </b-field>

              <div class="columns">
                <div class="column">
                  <b-field label="Data de nascimento">
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
                      v-model="birthdayDate"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Telefone">
                    <b-input
                      type="text"
                      maxlength="11"
                      minlength="11"
                      placeholder="Fone"
                      validation-message="Entre com um telefone válido"
                      v-model="phone"
                      pattern="[0-9]*"
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
                      maxlength="8"
                      minlength="8"
                      placeholder="CEP"
                      validation-message="Entre com um CEP válido"
                      v-model="zipcode"
                      pattern="[0-9]*"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Senha" class="">
                    <password
                      v-model="password"
                      maxlength="60"
                      secureLength="8"
                    >
                    </password>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Confirmação de senha">
                    <b-input type="password" value=""> </b-input>
                  </b-field>
                </div>
              </div>
              <div class="buttons">
                <b-button type="is-primary" outlined>Registrar</b-button>
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
export default {
  name: "Registro",
  components: { Password },

  data() {
    return {
      avatar: null,
      password: null,
      imageData: null,
    };
  },
  methods: {
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
  background-color: $primary;
  min-height: calc(100vh - 52px);
}
</style>
