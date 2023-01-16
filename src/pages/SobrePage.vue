<script>
import { mapState } from "vuex";
export default {
  name: "SobrePage",
  computed: mapState(["sobre"]),
  mounted() {
    this.$store.dispatch("LOAD_SOBRE");
  },
};
</script>
<template>
  <main>
    <section class="container">
      <h1>Sobre</h1>
      <section id="sobre" v-html="sobre"></section>
    </section>
  </main>
</template>
<style scoped>
main {
  background-color: var(--color-background);
  color: var(--color-text-dark);
  align-items: center;
}
#about {
  margin-bottom: 32px;
  color: var(--color-text-dark);
}
</style>
