<!--
  Basic rotating loading icon.
-->

<script>
import SvgIcon from "@/components/icons/SvgIcon";

export default {
  name: "LoadingAnimatedIcon",
  components: {SvgIcon}
}
</script>

<template>
  <div class="horizontal-center">
    <SvgIcon name="loading" size="medium" class="loading-animated-icon-loading-animation"/>
  </div>
</template>

<style scoped>
.loading-animated-icon-loading-animation {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
