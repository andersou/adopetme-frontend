import Vue from "vue";
import Vuex from "vuex";
import api, { loginUser, getUser } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    filters: {
      sex: null,
      size: null,
      specie: null,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearFilters(state) {
      state.filters = {
        sex: null,
        size: null,
        specie: null,
      };
    },
    setFilters(state, filters) {
      state.filters = Object.assign({}, state.filters, filters);
    },
  },
  actions: {
    async loginUser({ dispatch }, { email, password }) {
      let token = (await loginUser(email, password)).data.token;
      sessionStorage.setItem("token", token);
      dispatch("loginUserByToken", token);
    },
    async loginUserByToken({ commit }, token) {
      api.defaults.headers.common["X-ACCESS-TOKEN"] = token;
      let resp = await getUser();
      commit("setUser", resp.data);
    },
  },
  modules: {},
});
