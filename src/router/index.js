import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/junior",
    name: "Junior",
    component: () => import("../views/Junior.vue"),
    children: [
      {
        path: "blogr-landing-page",
        component: () => import("../views/BlogrLandingPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
