<template>
  <section class="filtro px-4 py-3 ">
    <!-- <div class="column is-one-third mt-5">
            <img src="~assets/pet-adoption.png" />
          </div> -->
    <h1 class="is-size-3 is-uppercase has-text-weight-light "></h1>
    <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2">
      Aqui você pode filtrar pelos animais desejados.
    </h1>
    <br />
    <div class="columns is-multiline is-mobile ">
      <div class="column is-12-desktop is-6-mobile is-4-tablet  ">
        <b-field label="Animal">
          <b-select placeholder="Animal" icon="cat" expanded rounded>
            <option value="1">Gato</option>
            <option value="2">Cachorro</option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12-desktop is-6-mobile is-4-tablet ">
        <b-field label="Porte">
          <b-select placeholder="Porte" icon="foot-print" expanded rounded>
            <option value="1">Pequeno</option>
            <option value="2">Médio</option>
            <option value="2">Grande</option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12-desktop is-6-mobile is-4-tablet ">
        <b-field label="Sexo">
          <b-select
            placeholder="Sexo"
            icon="gender-male-female"
            expanded
            rounded
          >
            <option value="1">Macho</option>
            <option value="2">Fêmea</option>
          </b-select>
        </b-field>
      </div>
    </div>
    <div class="buttons">
      <b-button type="is-primary">Buscar</b-button>
      <b-button type="is-primary is-light">Limpar</b-button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filtro {
  //   @include adopetme-background;
  min-height: inherit;
  @include desktop {
    position: sticky;
    top: 0;
    padding-bottom: 2rem !important;
  }
}
</style>
