import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueWindowSize from "vue-window-size";
import "./fa.config";
import "./vee-vlidate.config";
Vue.config.productionTip = false;

Vue.use(VueWindowSize);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
