<template>
  <div>
    <!-- Junior challenge start -->
    <router-link to="/junior/blogr-landing-page">Project14</router-link>
    <router-link to="/junior/crowdfunding-product-page-main"
      >Project15</router-link
    >
    <router-link to="/junior/interactive-pricing-component-main"
      >Project16</router-link
    >
    <router-link to="/junior/loopstudios-landing-page-main"
      >Project17</router-link
    >
    <router-link to="/junior/testimonials-grid-section-main"
      >Project18</router-link
    >
    <router-link to="/junior/fylo-data-storage-component-master"
      >Project19</router-link
    >
    <router-link to="/junior/coding-bootcamp-testimonials-slider-master"
      >Project20</router-link
    >
    <router-link to="/junior/social-media-dashboard-with-theme-switcher-master"
      >Project21</router-link
    >
    <router-link to="/junior/insure-landing-page-master">Project22</router-link>
    <router-link to="/junior/pricing-component-with-toggle-master"
      >Project23</router-link
    >
    <router-link to="/junior/project-tracking-intro-component-master"
      >Project24</router-link
    >
    <router-link to="/junior/clipboard-landing-page-master"
      >Project 25</router-link
    >
    <router-link
      to="/junior/landing-page-with-alternating-feature-blocks-master"
      >Project26</router-link
    >
    <router-link to="/junior/fylo-dark-theme-landing-page-master"
      >Project27</router-link
    >
    <router-link to="/junior/fylo-landing-page-with-two-column-layout-master">
      Project28</router-link
    >
    <router-link to="/junior/huddle-landing-page-with-curved-sections-master"
      >Project29</router-link
    >
    <!-- Junior challenge end -->
    <StatsPreviewCardComponent />
    <ProjectSecond />
    <ProfileCardComponent />
    <Project4 />
    <Project5 />
    <Project6 />
    <Project7 />
    <Project8 />
    <Project9 />
    <Project10 />
    <Project11 />
    <Project12 />
    <!-- Junior challenge start -->
    <Project13 />
    <!-- Junior challenge end -->
  </div>
</template>

<script>
import StatsPreviewCardComponent from "../components/StatsPreviewCardComponent/StatsPreviewCardComponent.vue";
import ProjectSecond from "../components/3-columnPreviewCardComponent/ProjectSecond.vue";
import ProfileCardComponent from "../components/ProfileCardComponent/ProfileCardComponent.vue";
import Project4 from "../components/FAQAccordionCard/Project4.vue";
import Project5 from "../components/SocialProofSectionMaster/Project5.vue";
import Project6 from "../components/ArticlePreviewComponentMaster/Project6.vue";
import Project7 from "../components/FourCardFeatureSectionMaster/Project7.vue";
import Project8 from "../components/BaseApparelComingSoonMaster/Project8.vue";
import Project9 from "../components/IntroComponentWithSignupFormMaster/Project9.vue";
import Project10 from "../components/SinglePriceGridComponentMaster/Project10.vue";
import Project11 from "../components/PingComingSoonPageMaster/Project11.vue";
import Project12 from "../components/HuddleLandingPageWithSingleIntroductorySectionMaster/Project12.vue";

import Project13 from "../components/SunnysideAgencyLandingPageMain/Project13.vue";

export default {
  data: () => ({
    isShow: false,
  }),
  name: "Home",
  components: {
    StatsPreviewCardComponent,
    ProjectSecond,
    ProfileCardComponent,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project9,
    Project10,
    Project11,
    Project12,
    Project13,
  },
};
</script>
