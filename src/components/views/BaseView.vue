<template>
  <section class="view">
    <header>
      <h2>{{title}}</h2>
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  name: "BaseView",
  props: {
    title: String,
  }
}
</script>

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