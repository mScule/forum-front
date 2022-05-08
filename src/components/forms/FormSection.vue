<!--
  Section where forms are put in.
-->

<script>
export default {
  name: "FormSection",
}
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>