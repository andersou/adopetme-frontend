<template>
  <main>
    <div class="container pt-6 pb-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card ">
            <div class="card-content">
             <b-field>
             <b-input placeholder="Nome"></b-input>
             </b-field>

              <b-field>
              <b-input placeholder="Sobrenome"></b-input>
              </b-field>
              
              <b-field>
              <b-input placeholder="CPF"></b-input>
              </b-field>

              <b-input placeholder="Idade"
                type="number"
                min="18"
                max="100">
             </b-input>
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
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary;
  height: 100vh;
}
</style>