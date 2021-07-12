import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    dataJuniorCards: [
      {
        imgURL: require("@/assets/Junior/sunnyside-agency-landing-page-main.jpg"),
        projectName: "sunnyside-agency-landing-page-main",
        number: 1,
      },
      {
        imgURL: require("@/assets/Junior/blogr-landing-page.jpg"),
        projectName: "blogr-landing-page",
        number: 2,
      },
      {
        imgURL: require("@/assets/Junior/crowdfunding-product-page-main.jpg"),
        projectName: "crowdfunding-product-page-main",
        number: 3,
      },
      {
        imgURL: require("@/assets/Junior/interactive-pricing-component-main.jpg"),
        projectName: "interactive-pricing-component-main",
        number: 4,
      },
      {
        imgURL: require("@/assets/Junior/loopstudios-landing-page-main.jpg"),
        projectName: "loopstudios-landing-page-main",
        number: 5,
      },
      {
        imgURL: require("@/assets/Junior/testimonials-grid-section-main.jpg"),
        projectName: "testimonials-grid-section-main",
        number: 6,
      },
      {
        imgURL: require("@/assets/Junior/fylo-data-storage-component-master.jpg"),
        projectName: "fylo-data-storage-component-master",
        number: 7,
      },
      {
        imgURL: require("@/assets/Junior/coding-bootcamp-testimonials-slider-master.jpg"),
        projectName: "coding-bootcamp-testimonials-slider-master",
        number: 8,
      },
      {
        imgURL: require("@/assets/Junior/social-media-dashboard-with-theme-switcher-master.jpg"),
        projectName: "social-media-dashboard-with-theme-switcher-master",
        number: 9,
      },
      {
        imgURL: require("@/assets/Junior/insure-landing-page-master.jpg"),
        projectName: "insure-landing-page-master",
        number: 10,
      },
      {
        imgURL: require("@/assets/Junior/pricing-component-with-toggle-master.jpg"),
        projectName: "pricing-component-with-toggle-master",
        number: 11,
      },
      {
        imgURL: require("@/assets/Junior/project-tracking-intro-component-master.jpg"),
        projectName: "project-tracking-intro-component-master",
        number: 12,
      },
      {
        imgURL: require("@/assets/Junior/clipboard-landing-page-master.jpg"),
        projectName: "clipboard-landing-page-master",
        number: 13,
      },
      {
        imgURL: require("@/assets/Junior/landing-page-with-alternating-feature-blocks-master.jpg"),
        projectName: "landing-page-with-alternating-feature-blocks-master",
        number: 14,
      },
      {
        imgURL: require("@/assets/Junior/fylo-dark-theme-landing-page-master.jpg"),
        projectName: "fylo-dark-theme-landing-page-master",
        number: 15,
      },
      {
        imgURL: require("@/assets/Junior/fylo-landing-page-with-two-column-layout-master.jpg"),
        projectName: "fylo-landing-page-with-two-column-layout-master",
        number: 16,
      },
      {
        imgURL: require("@/assets/Junior/huddle-landing-page-with-curved-sections-master.jpg"),
        projectName: "huddle-landing-page-with-curved-sections-master",
        number: 17,
      },
    ],
  },
  getters: {
    getJuniorCards: (s) => s.dataJuniorCards,
  },
};
