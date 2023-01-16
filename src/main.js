import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faInstagram, faFacebook);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
