<template>
  <header>
    <nav class="container">
      <a href="/">
        <img src="../assets/img/logo.svg" alt="Curta Mais" id="logo" />
      </a>
      <!-- A trocar por ícone -->
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        alt="Menu"
        id="menu-button"
        @click="menuToggle"
      />
      <!-- Refazer o modal -->
      <div id="menu-modal-overlay" v-if="menuActive" @click="menuToggle"></div>
      <div id="menu-modal-items" :class="{ active: menuActive }">
        <img src="../assets/img/logo.svg" alt="Curta Mais" id="menu-logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Vídeos</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
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
</style>
