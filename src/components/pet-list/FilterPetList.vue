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
          <b-select
            placeholder="Animal"
            icon="cat"
            expanded
            v-model="filters.specie"
            rounded
          >
            <option value="2">Gato</option>
            <option value="1">Cachorro</option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12-desktop is-6-mobile is-4-tablet ">
        <b-field label="Porte">
          <b-select
            placeholder="Porte"
            icon="foot-print"
            v-model="filters.size"
            expanded
            rounded
          >
            <option value="0">Muito Pequeno</option>
            <option value="1">Pequeno</option>
            <option value="2">Médio</option>
            <option value="3">Grande</option>
            <option value="4">Muito Grande</option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12-desktop is-6-mobile is-4-tablet ">
        <b-field label="Sexo">
          <b-select
            placeholder="Sexo"
            icon="gender-male-female"
            v-model="filters.sex"
            expanded
            rounded
          >
            <option value="M">Macho</option>
            <option value="F">Fêmea</option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12-desktop is-6-mobile is-4-tablet ">
        <b-field label="Ordenação">
          <b-select
            placeholder="Selecione a ordem"
            icon="sort"
            v-model="sort"
            expanded
            rounded
          >
            <option value="ASC">Mais velhos</option>
            <option value="DESC">Mais novos</option>
          </b-select>
        </b-field>
      </div>
    </div>
    <div class="buttons">
      <b-button @click="setFiltersAndSort({ filters, sort })" type="is-primary"
        >Buscar</b-button
      >
      <b-button @click="resetFiltersAndSort" type="is-primary is-light"
        >Limpar</b-button
      >
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      filters: {
        sex: null,
        specie: null,
        size: null,
      },
      sort: null,
    };
  },
  methods: {
    ...mapMutations(["setFiltersAndSort", "clearFiltersAndSort"]),
    resetFiltersAndSort() {
      this.filters = {
        sex: null,
        specie: null,
        size: null,
      };
      this.sort = null;
      this.clearFiltersAndSort();
    },
  },
};
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
