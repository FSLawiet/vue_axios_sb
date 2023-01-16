<script>
import { mapState } from "vuex";
export default {
  name: "ContatoPage",
  computed: mapState(["contatos"]),
  mounted() {
    this.$store.dispatch("LOAD_CONTATOS");
  },
};
</script>
<template>
  <main>
    <section class="container">
      <h1>Contato</h1>
      <section id="contatos">
        <div
          class="contato"
          v-for="(item, index) in contatos"
          v-bind:key="index"
        >
          <p class="contato-title">
            <strong>{{ item.title }}</strong>
          </p>
          <a :href="item.link" target="_blank" class="contato-url">{{
            item.label
          }}</a>
        </div>
      </section>
    </section>
  </main>
</template>
<style scoped>
main {
  background-color: var(--color-background);
  color: var(--color-text-dark);
  align-items: center;
}
#contatos {
  color: var(--color-text-dark);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contato a {
  color: var(--color-text-dark);
}
.contact-title {
  font-size: 18px;
}
</style>
