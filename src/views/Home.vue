<template>
  <div>
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
