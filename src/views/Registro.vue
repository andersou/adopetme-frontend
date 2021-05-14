<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <b-field label="Foto Pessoal">
            <b-upload v-model="dropFiles"
                multiple
                drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
        </b-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>

             <b-field label="Nome">
             <b-input placeholder="Nome"></b-input>
             </b-field>

              <b-field label="Sobrenome">
              <b-input placeholder="Sobrenome"></b-input>
              </b-field>
              
              <b-field label="CPF">
              <b-input placeholder="CPF"></b-input>
              </b-field>

              <b-field grouped>
              <b-field label="Gênero">
                <b-select placeholder="Gênero">
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Não binário</option>
                </b-select>
              </b-field>
              <b-field label="Idade">
              <b-input placeholder="Idade"
                type="number"
                min="18"
                max="100">
              </b-input>
              </b-field>
              </b-field>

              <b-field grouped>
              <b-field label="Senha" class="">
                <b-input type="password"
                value=""
                password-reveal>
                </b-input>
              </b-field>

              <b-field label="Confirmação de senha">
                <b-input type="password"
                value=""
                password-reveal>
                </b-input>
              </b-field>
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
  name: "Registro",
  components: {},

  data() {
            return {
                dropFiles: []
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }
        }
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary;
  height: 100vh;
}
</style>