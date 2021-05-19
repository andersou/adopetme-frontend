import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueMask from "v-mask";
import router from "./router";
import store from "./store";

// import "buefy/dist/buefy.css";
import "./styles/style.scss";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Buefy);
Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
