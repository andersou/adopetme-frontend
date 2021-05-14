<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <b-field label="Foto do Animal">
                <b-upload v-model="dropFiles" multiple drag-drop>
                  <section class="section">
                    <div class="content has-text-centered">
                      <p>
                        <b-icon icon="upload" size="is-large"> </b-icon>
                      </p>
                      <p>Drop your files here or click to upload</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>

              <div class="tags">
                <span
                  v-for="(file, index) in dropFiles"
                  :key="index"
                  class="tag is-primary"
                >
                  {{ file.name }}
                  <button
                    class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)"
                  ></button>
                </span>
              </div>

              <b-field grouped>
                <b-field label="Animal">
                  <b-select>
                    <option>Gato</option>
                    <option>Cachorro</option>
                  </b-select>
                </b-field>

                <b-field label="Nome" expanded>
                  <b-input></b-input>
                </b-field>
              </b-field>

              <b-field>
                <b-field label="Data do Nascimento">
                  <b-datepicker
                    placeholder="Click to select..."
                    :min-date="minDate"
                    :max-date="maxDate"
                  >
                  </b-datepicker>
                </b-field>
              </b-field>

              <b-field label="Peso">
                <b-slider step="0.1" :value="20"> </b-slider>
              </b-field>

              <b-field label="Descrição" class="descricao">
                <b-input maxlength="200" type="textarea"></b-input>
              </b-field>

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

      dropFiles: [],
    };
  },

  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary;
  height: 100vh;
}

</style>
