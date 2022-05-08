<!--
  Sub section is a glorified html5 section element with styling and header.

  Attributes
    title: Title of the section.
-->

<script>
export default {
  name: "SubSection",
  props: {
    title: String
  }
}
</script>

<template>
<section class="border">
  <header><h3>{{title}}:</h3></header>
  <slot></slot>
</section>
</template>

<style scoped>
h3 {
  margin-top: 0;
}
section {
  border-radius:var(--border-radius-sharp);
  padding: var(--padding-large);
}
</style>