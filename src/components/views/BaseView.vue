<!--
  Base view is ... well, the base view of the views.
  Every view is built on top of base view component.

  Attributes
    title: Title of the view.
-->

<script>
export default {
  name: "BaseView",
  props: {
    title: String,
  }
}
</script>

<template>
  <section class="view">
    <header>
      <h2>{{ title }}</h2>
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
  </section>
</template>

<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

section {
  margin: var(--margin-medium);
  margin-top: calc(5em + var(--margin-medium));
}

h2 {
  margin-top: 0;
  text-align: left;
}
</style>

<style>
.view > *:first-child {
  margin-top: 0;
}

.view > * {
  margin-top: var(--margin-medium);
}
</style>
