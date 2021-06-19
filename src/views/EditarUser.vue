<template>
  <form-user :user="user" />
</template>

<script>
import FormUser from "../components/forms/FormUser.vue";
import { getUser } from "../services/api";

export default {
  components: { FormUser },
  data() {
    return { user: {} };
  },
  created() {
    getUser()
      .then(({ data }) => (this.user = data))
      .catch(() => {
        this.$router.push("/");
      });
  },
};
</script>

<style></style>
