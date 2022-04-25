<template>
  <button class="vertical-center">
      <SvgIcon :name="iconName" :size="size"/>
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
    }
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
