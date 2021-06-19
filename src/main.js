import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueMask from "v-mask";
import router from "./router";
import store from "./store";

// import "buefy/dist/buefy.css";
import "./styles/style.scss";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import fbInit from './services/facebook'
import { momentPlugin } from './mixins/petHelpers'
fbInit()
Vue.use(momentPlugin())
Vue.use(Buefy);
Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
