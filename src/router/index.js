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
    path: "/newbie",
    component: () => import("../views/Newbie.vue"),
  },
  {
    path: "/junior",
    name: "Junior",
    component: () => import("../views/Junior.vue"),
  },
  {
    path: "/junior/sunnyside-agency-landing-page-main",
    component: () => import("../views/SunnysideAgencyLandingPageMain.vue"),
  },
  {
    path: "/junior/blogr-landing-page",
    component: () => import("../views/BlogrLandingPage.vue"),
  },
  {
    path: "/junior/crowdfunding-product-page-main",
    component: () => import("../views/CrowdfundingProductPageMain.vue"),
  },
  {
    path: "/junior/interactive-pricing-component-main",
    component: () => import("../views/InteractivePricingComponentMain.vue"),
  },
  {
    path: "/junior/loopstudios-landing-page-main",
    component: () => import("../views/LoopstudiosLandingPageMain.vue"),
  },
  {
    path: "/junior/testimonials-grid-section-main",
    component: () => import("../views/TestimonialsGridSectionMain.vue"),
  },
  {
    path: "/junior/fylo-data-storage-component-master",
    component: () => import("../views/FyloDataStorageComponentMaster.vue"),
  },
  {
    path: "/junior/coding-bootcamp-testimonials-slider-master",
    component: () =>
      import("../views/CodingBootcampTestimonialsSliderMaster.vue"),
  },
  {
    path: "/junior/social-media-dashboard-with-theme-switcher-master",
    component: () =>
      import("../views/SocialMediaDashboardWithThemeSwitcherMaster.vue"),
  },
  {
    path: "/junior/insure-landing-page-master",
    component: () => import("../views/InsureLandingPageMaster.vue"),
  },
  {
    path: "/junior/pricing-component-with-toggle-master",
    component: () => import("../views/PricingComponentWithToggleMaster.vue"),
  },
  {
    path: "/junior/project-tracking-intro-component-master",
    component: () => import("../views/ProjectTrackingIntroComponentMaster.vue"),
  },
  {
    path: "/junior/clipboard-landing-page-master",
    component: () => import("../views/ClipboardLandingPageMaster.vue"),
  },
  {
    path: "/junior/landing-page-with-alternating-feature-blocks-master",
    component: () =>
      import("../views/LandingPageWithAlternatingFeatureBlocksMaster.vue"),
  },
  {
    path: "/junior/fylo-dark-theme-landing-page-master",
    component: () => import("../views/FyloDarkThemeLandingPageMaster.vue"),
  },
  {
    path: "/junior/fylo-landing-page-with-two-column-layout-master",
    component: () =>
      import("../views/FyloLandingPageWithTwoColumnLayoutMaster.vue"),
  },
  {
    path: "/junior/huddle-landing-page-with-curved-sections-master",
    component: () =>
      import("../views/HuddleLandingPageWithCurvedSectionsMaster.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
