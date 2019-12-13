import Vue from "vue";
import Vuex from "vuex";
import basic from "./basic";
import pages from "./pages";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    basic,
    pages
  }
});
