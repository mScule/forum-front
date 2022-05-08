<!--
  Button that contains SvgIcon component inside it.

  Attributes
    icon-name: Name of the icon that will be shown.
               Supported icons by name that doesn't support active state:
               close     | toggle-on   | toggle-off
               square    | information | success
               warning   | error       | no-connection
               toxic     | home        | user
               loading   |             |
               Supported icons by name that supports active state:
               add       | next        | previous
               help      | comment     | vote-up
               vote-down | markdown    | private
    active:    Sets the icon to it's active mode.
    size:      Has 3 modes. "small", "medium", and "large"
-->

<script>
import SvgIcon from "@/components/icons/SvgIcon";

export default {
  name: "IconButton",
  components: {SvgIcon},
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

<template>
  <button class="vertical-center">
    <SvgIcon v-if="active" :name="iconName" :size="size" active/>
    <SvgIcon v-else :name="iconName" :size="size"/>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  width: auto;
  padding: var(--padding-small);
  background-color: transparent;
  border: none;
}
</style>
