<template>
  <div class="icon-explainer">
    <p>{{explanation}}</p>
    <SvgIcon class="icon-explainer-icon" size="small" :name="iconName" :color="iconColor"/>
  </div>
</template>

<script>
import SvgIcon from "@/components/icons/SvgIcon";
export default {
  name: "IconExplainer",
  components: {SvgIcon},
  props: {
    explanation: String,
    iconName: String,
    iconColor: String,
  }
}
</script>

<style scoped>
  .icon-explainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
