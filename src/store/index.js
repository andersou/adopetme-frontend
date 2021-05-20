import Vue from "vue";
import Vuex from "vuex";
import api, { loginUser, getUser } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loginUser({ dispatch }, { email, password }) {
      let token = (await loginUser(email, password)).data.token;
      sessionStorage.setItem("token", token);
      dispatch("loginUserByToken, token");
    },
    async loginUserByToken({ commit }, token) {
      api.defaults.headers.common["X-ACCESS-TOKEN"] = token;
      let resp = await getUser();
      commit("setUser", resp.data);
    },
  },
  modules: {},
});
