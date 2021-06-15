<template>
  <div>
    <StatsPreviewCardComponent />
    <ProjectSecond />
  </div>
</template>

<script>
import StatsPreviewCardComponent from "../components/StatsPreviewCardComponent/StatsPreviewCardComponent.vue";
import ProjectSecond from "../components/3-columnPreviewCardComponent/ProjectSecond.vue";

export default {
  name: "Home",
  components: { StatsPreviewCardComponent, ProjectSecond },
};
</script>
