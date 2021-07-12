import Vue from "vue";
import Vuex from "vuex";
import Junior from "./modules/junior";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    valueOfTarget: "_self",
  },
  actions: {
    chooseTargetValue(ctx, value) {
      ctx.commit("setValueOfTarget", value);
    },
  },
  mutations: {
    setValueOfTarget(state, currentValue) {
      state.valueOfTarget = currentValue;
    },
  },
  getters: {
    getTargetValue: (s) => s.valueOfTarget,
  },
  modules: {
    Junior,
  },
});
