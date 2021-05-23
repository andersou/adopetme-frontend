<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <h1 class="is-size-3 is-uppercase has-text-weight-light ml-6">
                Olá, {{ user.firstName }}
              </h1>
              <h1
                class="is-size-6 is-uppercase has-text-weight-light pb-2 ml-6"
              >
                Adicione seu peludinho para adoção.
              </h1>
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
                    <img v-else class="img-avatar" src="../../assets/pet.png" />
                  </figure>
                  <b-field label="Foto" class=" has-text-centered">
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
                <div class="column is-3 is-offset-2">
                  <b-field label="Animal">
                    <b-select
                      v-model="register.specie"
                      placeholder="Selecione uma opção"
                      expanded
                    >
                      <option value="2">Gato</option>
                      <option value="1">Cachorro</option>
                      <option value="0">Outro</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column is-5">
                  <b-field label="Nome">
                    <b-input
                      v-model="register.name"
                      placeholder="Nome do Pet"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <b-field label="Porte">
                    <b-slider
                      size="is-medium"
                      :min="0"
                      :max="4"
                      :tooltip="false"
                      v-model="register.size"
                    >
                      <template
                        v-for="(val, idx) in [
                          'Muito Pequeno',
                          'Pequeno',
                          'Médio',
                          'Grande',
                          'Muito Grande',
                        ]"
                      >
                        <b-slider-tick :value="idx" :key="val">{{
                          val
                        }}</b-slider-tick>
                      </template>
                    </b-slider>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4 is-offset-2">
                  <b-field label="Data do Nascimento">
                    <b-datepicker
                      v-model="register.birthdayDate"
                      placeholder="Selecione uma data"
                      ref="datepicker"
                      :min-date="minDate"
                      :max-date="maxDate"
                    >
                    </b-datepicker>
                    <b-button
                      @click="$refs.datepicker.toggle()"
                      icon-left="calendar-today"
                      type="is-primary"
                    />
                  </b-field>
                </div>
                <div class="column is-4 ">
                  <b-field label="Sexo">
                    <b-select v-model="register.sex" expanded>
                      <option value="M">Macho</option>
                      <option value="F">Fêmea</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <b-field label="Descrição breve">
                    <b-input v-model="register.simpleDescription"></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <b-field label="Descrição" class="descricao">
                    <editor
                      initialEditType="wysiwyg"
                      :options="editorOptions"
                      ref="toastuiEditor"
                    />
                  </b-field>
                </div>
              </div>

              <div class="buttons">
                <b-button type="is-primary" @click="doRegister" outlined
                  >Enviar</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/i18n/pt-br";
import { registerPet } from "../../services/api";
import { mapState } from "vuex";
export default {
  name: "Cadastro",
  components: { Editor },
  computed: {
    ...mapState(["user"]),
  },

  data() {
    const today = new Date();

    return {
      avatar: null,
      imageData: null,
      register: {
        name: "",
        birthdayDate: new Date(),
        size: 2,
        specie: null,
        sex: "M",
        simpleDescription: "",
        detailedDescription: "",
      },
      editorOptions: {
        language: "pt",
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          "heading",
          "bold",
          "italic",
          "strike",
          // "divider",
          // "hr",
          // "quote",
          "divider",
          "ul",
          "ol",
          // "task",
          "indent",
          "outdent",
          "divider",
          "table",
          // "image",
          // "link",
          // "divider",
          // "code",
          // "codeblock",
        ],
      },
      minDate: new Date(
        today.getFullYear() - 80,
        today.getMonth(),
        today.getDate()
      ),
      maxDate: new Date(
        today.getFullYear() + 18,
        today.getMonth(),
        today.getDate()
      ),
    };
  },
  methods: {
    doRegister() {
      let formData = new FormData();
      for (let prop in this.register) {
        if (this.register[prop]) formData.set(prop, this.register[prop]);
      }
      formData.set("photos", this.avatar);
      formData.set(
        "birthdayDate",
        this.register.birthdayDate
          .toISOString()
          .split("T")[0]
          .replaceAll("-", "/")
      );

      let html = this.$refs.toastuiEditor.invoke("getHtml");
      formData.set("detailedDescription", html);
      this.formErrors = [];
      registerPet(formData)
        .then(() => {
          this.$router.replace("/dashboard");
          this.$buefy.toast.open({
            message: "Seu pet foi cadastrado com sucesso!.",
            type: "is-primary",
          });
        })
        .catch((error) => {
          this.formErrors = error.response.data.errors;
          this.$buefy.toast.open({
            message: "Ocorreu um erro ao cadastrar o pet.",
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
main {
  @include adopetme-background;
}
.img-avatar {
  max-width: 280px;
}
@include tablet {
  .img-avatar {
    margin-right: 3rem;
  }
}
</style>
