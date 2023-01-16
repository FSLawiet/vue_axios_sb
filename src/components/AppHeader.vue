<template>
  <header>
    <nav class="container">
      <router-link to="/" alt="Curta Mais">
        <!-- Trocar tag img por svg (Componentizar) -->
        <PrimaryLogo id="logo" style="fill: orange" />
      </router-link>
      <!-- A trocar por ícone (Componentizar)-->
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        alt="Menu"
        id="menu-button"
        @click="menuToggle"
      />
      <!-- Refazer o modal (Componentizar)-->
      <div id="menu-modal-overlay" v-if="menuActive" @click="menuToggle"></div>
      <div id="menu-modal-items" :class="{ active: menuActive }">
        <PrimaryLogo alt="Curta Mais" id="menu-logo" style="fill: orange" />
        <ul>
          <li>
            <router-link
              to="/"
              v-on="this.menuActive ? { click: menuToggle } : {}"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/videos"
              v-on="this.menuActive ? { click: menuToggle } : {}"
              >Vídeos</router-link
            >
          </li>
          <li>
            <router-link
              to="/sobre"
              v-on="this.menuActive ? { click: menuToggle } : {}"
              >Sobre</router-link
            >
          </li>
          <li>
            <router-link
              to="/contato"
              v-on="this.menuActive ? { click: menuToggle } : {}"
              >Contato</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import PrimaryLogo from "./PrimaryLogo";

export default {
  name: "AppHeader",
  components: {
    PrimaryLogo,
  },
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>
<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
ul {
  list-style: none;
  text-align: center;
}
ul li {
  margin: 20px 0;
}
ul li a {
  color: var(--color-text-light);
}
#logo {
  width: 70px;
}
#menu-button {
  width: 30px;
  cursor: pointer;
}
#menu-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  transition: ease-in-out 0.4s;
}
#menu-modal-items {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  background-color: var(--color-background-nav);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: ease-in-out 0.4s;
}
#menu-modal-items.active {
  display: flex;
}
#menu-logo {
  width: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-modal-overlay {
    display: none;
  }
  #menu-modal-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  ul li {
    margin: 0;
  }
}
</style>
