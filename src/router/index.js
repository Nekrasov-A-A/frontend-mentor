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
      {
        path: "crowdfunding-product-page-main",
        component: () => import("../views/CrowdfundingProductPageMain.vue"),
      },
      {
        path: "interactive-pricing-component-main",
        component: () => import("../views/InteractivePricingComponentMain.vue"),
      },
      {
        path: "loopstudios-landing-page-main",
        component: () => import("../views/LoopstudiosLandingPageMain.vue"),
      },
      {
        path: "testimonials-grid-section-main",
        component: () => import("../views/TestimonialsGridSectionMain.vue"),
      },
      {
        path: "fylo-data-storage-component-master",
        component: () => import("../views/FyloDataStorageComponentMaster.vue"),
      },
      {
        path: "coding-bootcamp-testimonials-slider-master",
        component: () =>
          import("../views/CodingBootcampTestimonialsSliderMaster.vue"),
      },
      {
        path: "social-media-dashboard-with-theme-switcher-master",
        component: () =>
          import("../views/SocialMediaDashboardWithThemeSwitcherMaster.vue"),
      },
      {
        path: "insure-landing-page-master",
        component: () => import("../views/InsureLandingPageMaster.vue"),
      },
      {
        path: "pricing-component-with-toggle-master",
        component: () =>
          import("../views/PricingComponentWithToggleMaster.vue"),
      },
      {
        path: "project-tracking-intro-component-master",
        component: () =>
          import("../views/ProjectTrackingIntroComponentMaster.vue"),
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
