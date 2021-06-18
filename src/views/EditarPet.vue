<template>
  <form-pet :pet="pet" />
</template>

<script>
import FormPet from "../components/forms/FormPet.vue";
import { getPet } from "../services/api";
export default {
  name: "EditarPet",
  components: { FormPet },
  props: ["petId"],
  data() {
    return {
      pet: {},
    };
  },
  created() {
    getPet(this.petId)
      .then(({ data }) => {
        this.pet = data;
      })
      .catch(() => {
        this.$router.push("/dashboard");
      });
  },
};
</script>

<style lang="scss" scoped></style>
