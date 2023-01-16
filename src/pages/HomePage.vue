<script>
export default {
  name: "HomePage",
};
</script>
<template>
  <main>
    <p class="home-title">Hub <strong>Curta Mais</strong></p>
    <a
      href="https://www.youtube.com/@CurtaMaisCurtaMais?sub_confirmation=1"
      target="_blank"
    >
      <!-- Trocar imagem por Componente de Botão -->
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg"
        alt="Inscreva-se no canal do Curta Mais!"
        id="subscribe"
    /></a>
    <p class="home-subtitle">Confira nossos vídeos!</p>
  </main>
</template>
<style scope>
main {
  background-color: var(--color-background-home);
  color: var(--color-text-light);
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.home-title {
  font-size: 24px;
}
.home-subtitle {
  font-size: 20px;
}

#subscribe {
  width: 340px;
}

@media (min-width: 700px) {
  #subscribe {
    width: 370px;
  }
}
</style>
