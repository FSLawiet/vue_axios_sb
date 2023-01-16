<script>
import { mapState } from "vuex";
export default {
  name: "VideosPage",
  computed: mapState(["videos"]),
  mounted() {
    this.$store.dispatch("LOAD_VIDEOS");
  },
};
</script>
<template>
  <main>
    <section class="container">
      <h1>Videos</h1>
      <section id="videos">
        <div class="video" v-for="(item, index) in videos" v-bind:key="index">
          <a :href="item.link" target="_blank">
            <img :src="item.thumb" :alt="item.title" />
            <p class="video-title">{{ item.title }}</p>
          </a>
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
#videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.video {
  width: 80%;
}
.video img {
  width: 100%;
}
.video a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

@media (min-width: 700px) {
  #videos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .video {
    width: 300px;
  }
}

@media (min-width: 1100px) {
  #videos {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
