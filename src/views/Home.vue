<template>
  <div>
    <StatsPreviewCardComponent />
    <ProjectSecond />
    <ProfileCardComponent />
    <Project4 />
  </div>
</template>

<script>
import StatsPreviewCardComponent from "../components/StatsPreviewCardComponent/StatsPreviewCardComponent.vue";
import ProjectSecond from "../components/3-columnPreviewCardComponent/ProjectSecond.vue";
import ProfileCardComponent from "../components/ProfileCardComponent/ProfileCardComponent.vue";
import Project4 from "../components/FAQAccordionCard/Project4.vue";

export default {
  name: "Home",
  components: {
    StatsPreviewCardComponent,
    ProjectSecond,
    ProfileCardComponent,
    Project4,
  },
};
</script>
