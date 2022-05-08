<!--
  Has text that explains the meaning of the SvgIcon next to it.

  Attributes
    explanation: The explanation for the icon.
    icon-name:   The name of the icon.
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
    icon-color:  Color of the icon. Takes in basic html color values.
-->

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

<template>
  <div class="icon-explainer">
    <p>{{ explanation }}</p>
    <SvgIcon class="icon-explainer-icon" size="small" :name="iconName" :color="iconColor"/>
  </div>
</template>

<style scoped>
.icon-explainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
