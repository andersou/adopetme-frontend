<template>
  <div>
    <div class="container my-2 ">
      <b-pagination
        :total="petsData.itemsCount"
        :per-page="itemsPerPage"
        v-model="currentPage"
        aria-next-label="Proxima pagina"
        aria-previous-label="Pagina anterior"
        aria-page-label="Pagina"
        aria-current-label="Pagina atual"
        @change="loadPets"
      >
      </b-pagination>
    </div>
    <div v-if="petsData.data" class="columns is-multiline">
      <div class="column is-4" v-for="pet in petsData.data" :key="pet.id">
        <!-- Pet-card (separar em componente) -->
        <div class="card">
          <div class="card-image">
            <router-link :to="'/detalhes/' + pet.id">
              <b-image
                :src="getPetPhoto(pet)"
                src-fallback="https://via.placeholder.com/468x350?text=Foto+não+disponível"
                ratio="4by3"
              ></b-image>
            </router-link>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left is-relative">
                <b-icon
                  :icon="getPetSpecieIcon(pet._specie)"
                  pack="fas"
                  size="is-large"
                >
                </b-icon>
                <b-icon
                  :icon="getPetSexIcon(pet.sex)"
                  :class="{
                    'sex-icon': true,
                    'sex-icon-male': !!(pet.sex == 'M'),
                    'sex-icon-female': !!(pet.sex == 'F'),
                  }"
                  pack="fas"
                  size="is-large"
                >
                </b-icon>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ pet.name }}
                  <span class="is-size-6 is-italic has-text-weight-light">{{
                    calculateAge(pet._birthdayDate)
                  }}</span>
                </p>
                <p class="subtitle is-6 mb-1">
                  {{ pet.protectorData.firstName }}
                  {{ pet.protectorData.lastName }}
                </p>
                <p class="subtitle is-6 mb-1">
                  {{ petSizeTransform(pet._size) }}
                </p>
              </div>
            </div>

            <div class="content">
              {{ pet.simpleDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-2 ">
      <b-pagination
        :total="petsData.itemsCount"
        :per-page="itemsPerPage"
        v-model="currentPage"
        aria-next-label="Proxima pagina"
        aria-previous-label="Pagina anterior"
        aria-page-label="Pagina"
        aria-current-label="Pagina atual"
        @change="loadPets"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { getPets } from "../../services/api";
import { mapState } from "vuex";
import petHelpersMixin from "../../mixins/petHelpers";
export default {
  mixins: [petHelpersMixin],
  mounted() {
    this.loadPets();
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 15,
      test: 0,
      testTwo: 0,
      petsData: {},
    };
  },
  computed: mapState(["filters", "sort"]),
  methods: {
    loadPets() {
      getPets(this.currentPage, this.filters, this.sort)
        .then((r) => {
          this.petsData = r.data;
        })
        .catch(() => {
          this.petsData = {};
        });
    },
  },
  watch: {
    filters() {
      this.loadPets();
    },
  },
};
</script>

<style lang="scss">
.sex-icon {
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}
.sex-icon-male {
  color: #b0c7ed;
}
.sex-icon-female {
  color: #e0caed;
}
</style>
