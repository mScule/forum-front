<template>
  <div class="base-sign-main-container information border">
    <div class="base-sign-heading border-bottom">
      <h3>{{ heading }}</h3>
      <div class="base-sign-svg-icon">
        <SvgIcon v-if="iconColor" :name="iconName" :color="iconColor" size="medium"/>
        <SvgIcon v-else :name="iconName" size="medium"/>
      </div>
    </div>
    <div class="base-sign-body">
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/icons/SvgIcon";

export default {
  name: "BaseSign",
  components: {
    SvgIcon,
  },
  props: {
    heading: String,
    message: String,
    iconName: String,
    iconColor: String,
  }
}
</script>

<style scoped>
h3 {
  margin: var(--margin-small);
  width: fit-content;
}

div {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.base-sign-main-container {
  width: auto;
  display: flex;
  flex-direction: column;
  padding: var(--padding-medium);
  border-radius: var(--border-radius-sharp);
}

.base-sign-heading {
  width: 100%;
  padding-bottom: var(--padding-medium);
}

.base-sign-body {
  margin-top: var(--margin-medium);
}

.base-sign-svg-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
