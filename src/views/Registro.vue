<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
              <b-field label="Foto Pessoal">
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

              <div class="tags" v-if="file">
                <span class="tag is-primary">
                  {{ file.name }}
                  <button
                    class="delete is-small"
                    type="button"
                    @click="deleteDropFile()"
                  ></button>
                </span>
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
                  <b-field label="Senha" class="">
                    <password 
                    v-model="password"
                    maxlength="60"
                    secureLength="8"> 
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
      avatar: {},
      password: null,
    };
  },
  methods: {
    deleteDropFile() {
      this.avatar = {};
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary;
  min-height: calc(100vh - 52px);
}
</style>
