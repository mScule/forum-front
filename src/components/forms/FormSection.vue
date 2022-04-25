<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormSection",
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>