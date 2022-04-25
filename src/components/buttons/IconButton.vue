<template>
  <button class="vertical-center">
      <SvgIcon v-if="active" :name="iconName" :size="size" active/>
      <SvgIcon v-else :name="iconName" :size="size"/>
  </button>
</template>

<script>
import SvgIcon from "@/components/icons/SvgIcon";

export default {
  name: "IconButton",
  components: { SvgIcon },
  props: {
    iconName: String,
    size: {
      type: String,
      default: "medium",
    },
    active: Boolean,
  },
}
</script>

<style scoped>
  button {
    cursor: pointer;
    width: auto;
    padding: var(--padding-small);
    background-color: transparent;
    border: none;
  }
</style>
