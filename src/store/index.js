import Vuex from "vuex";
import axios from "axios";

const store = new Vuex.Store({
  state: {
    darkMode: false,
    socialLinks: [],
    sobre: "",
    videos: [],
    contatos: [],
  },
  actions: {
    LOAD_SOCIAL_LINKS({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/social-links.json`)
        .then((resp) => {
          commit(
            "SET_SOCIAL_LINKS",
            {
              list: resp.data,
            },
            (err) => {
              console.error(err);
            }
          );
        });
    },
    LOAD_SOBRE({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}/sobre.json`).then((resp) => {
        commit(
          "SET_SOBRE",
          {
            sobre: resp.data.about,
          },
          (err) => {
            console.error(err);
          }
        );
      });
    },
    LOAD_VIDEOS({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}/videos.json`).then((resp) => {
        commit(
          "SET_VIDEOS",
          {
            list: resp.data,
          },
          (err) => {
            console.error(err);
          }
        );
      });
    },
    LOAD_CONTATOS({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}/contato.json`).then((resp) => {
        commit(
          "SET_CONTATOS",
          {
            list: resp.data,
          },
          (err) => {
            console.error(err);
          }
        );
      });
    },
  },
  mutations: {
    SET_SOCIAL_LINKS(state, { list }) {
      state.socialLinks = list;
    },
    SET_SOBRE(state, { sobre }) {
      state.sobre = sobre;
    },
    SET_VIDEOS(state, { list }) {
      state.videos = list;
    },
    SET_CONTATOS(state, { list }) {
      state.contatos = list;
    },
  },
});

export default store;
