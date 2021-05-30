<template>
  <main>
    <div class="columns is-desktop">
      <div class="column is-3-desktop">
        <filter-pet-list />
      </div>
      <div class="column is-9-desktop">
        <pet-list />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import FilterPetList from "../components/pet-list/FilterPetList.vue";
import PetList from "../components/pet-list/PetList.vue";
export default {
  components: { FilterPetList, PetList },
  computed: {
    ...mapState(["user"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
