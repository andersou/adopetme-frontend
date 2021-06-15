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
                  :icon="{ 0: 'paw', 1: 'dog', 2: 'cat' }[pet._specie]"
                  pack="fas"
                  size="is-large"
                >
                </b-icon>
                <b-icon
                  :icon="{ M: 'mars', F: 'venus', N: 'genderless' }[pet.sex]"
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
                <p class="subtitle is-6 mb-1">@nome do protetor</p>
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
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";
import { getPets } from "../../services/api";
import { mapState } from "vuex";
export default {
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
    processPetsLink(link) {
      if (link.startsWith("http")) {
        return link;
      } else {
        if (!link.startsWith("/")) link = "/" + link;
        return `${process.env.VUE_APP_API_URL}/images/pets${link}`;
      }
    },
    getPetPhoto(pet) {
      if (pet.petPhotos[0] && pet.petPhotos[0].photoUri)
        return this.processPetsLink(pet.petPhotos[0].photoUri);

      return "";
    },
    loadPets() {
      getPets(this.currentPage, this.filters, this.sort)
        .then((r) => {
          this.petsData = r.data;
        })
        .catch(() => {
          this.petsData = {};
        });
    },

    petSizeTransform(petSize) {
      let sizes = {
        "0": "Bem Pequeno",
        "1": "Pequeno",
        "2": "Médio",
        "3": "Grande",
        "4": "Bem Grande",
      };
      //   return this.petsData.consts.sizes[petSize];
      return sizes[petSize];
    },
    calculateAge(birthdayDate) {
      return moment(birthdayDate).fromNow(true);
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
