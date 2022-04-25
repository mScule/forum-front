<template>
<section class="border">
  <header><h3>{{title}}:</h3></header>
  <slot></slot>
</section>
</template>

<script>
export default {
  name: "SubSection",
  props: {
    title: String
  }
}
</script>

<style scoped>
h3 {
  margin-top: 0;
}
section {
  border-radius:var(--border-radius-sharp);
  padding: var(--padding-large);
}
</style>