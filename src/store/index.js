import Vue from "vue";
import Vuex from "vuex";
import Junior from "./modules/junior";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Junior,
  },
});
