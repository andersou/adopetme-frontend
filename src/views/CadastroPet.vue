<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <h1 class="is-size-3 is-uppercase has-text-weight-light">
                Olá, $USUARIO
              </h1>
              <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2">
              Adicione seu peludinho para adoção.
              </h1>
               <div class="container">
                <div class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6 mb-6">
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
                      src="../assets/pet.png"
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

                <b-field label="Nome" expanded>
                  <b-input></b-input>
                </b-field>
              <div class="columns">
                <div class="column">
                  <b-field label="Animal" expanded>
                  <b-select>
                    <option>Gato</option>
                    <option>Cachorro</option>
                  </b-select>
                </b-field>
                </div>
                <div class="column">
                  <b-field label="Porte">
            <b-radio-button v-model="radioButton"
                native-value="Pequeno"
                type="is-primary is-light is-outlined">
                <span>Pequeno</span>
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Médio"
                type="is-primary is-light is-outlined">
                <span>Médio</span>
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Grande"
                type="is-primary is-light is-outlined">
                <span>Grande</span>
            </b-radio-button>

           </b-field>
            <p class="content">
                <b>Escolha:</b>
                {{ radioButton }}
            </p>
                </div>
              <div class="column">
                <b-field label="Sexo" expanded>
                  <b-select>
                    <option>Macho</option>
                    <option>Fêmea</option>
                  </b-select>
                </b-field>
              </div>
              </div>

              <div class="column">
                <b-field label="Data do Nascimento">
                  <b-datepicker
                    placeholder="Click to select..."
                    :min-date="minDate"
                    :max-date="maxDate"
                  >
                  </b-datepicker>
                </b-field>
                </div>
              <div class="column">
              <b-field label="Descrição" class="descricao">
                <b-input maxlength="200" type="textarea"></b-input>
              </b-field>
              </div>
              <div class="buttons">
                <b-button type="is-primary" outlined>Enviar</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Cadastro",
  components: {},
  
  data() {
    const today = new Date();

    return {
      avatar: null,
      imageData: null,
      radioButton: '',
      date: new Date(),
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
  background:   url(../assets/capa.png),
                url(../assets/ruido.png),
                linear-gradient(110deg, $adopetme-logo-color, $primary);
  background-attachment: fixed;
  //@include desktop {
  min-height: calc(100vh - 52px);
  //}
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
