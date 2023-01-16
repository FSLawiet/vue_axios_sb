<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import "./assets/styles/global.css";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
