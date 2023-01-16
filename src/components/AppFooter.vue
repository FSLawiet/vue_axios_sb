<template>
  <footer>
    <div id="socials">
      <div
        class="social"
        v-for="(item, index) in socialLinks"
        v-bind:key="index"
      >
        <a :href="item.link" target="_blank" class="social-icon">
          <font-awesome-icon
            v-if="item.icon === 0"
            icon="fa-brands fa-instagram"
            size="xl"
            :alt="item.label"
          />
          <font-awesome-icon
            v-if="item.icon === 1"
            icon="fa-brands fa-facebook"
            size="xl"
            :alt="item.label"
          />
          <font-awesome-icon
            v-if="item.icon === 2"
            icon="fa-brands fa-twitter"
            size="xl"
            :alt="item.label"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "AppFooter",
  computed: mapState(["socialLinks"]),
  mounted() {
    this.$store.dispatch("LOAD_SOCIAL_LINKS");
  },
};
</script>
<style scoped>
footer {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.social-icon {
  color: var(--color-text-light);
  border: 1px solid var(--color-text-light);
  border-radius: 50%;
  padding: 12px;
}
</style>
