<template>
  <button>{{text}}</button>
</template>

<script>
export default {
  name: "TextButton",
  props: { text: String },
}
</script>

<style scoped>
  button {
    cursor: pointer;
    width: 100%;

    margin-top: var(--margin-medium);

    border-style: solid;
    border-width: var(--border-width);
    border-radius: var(--border-radius-round);
    border-color: var(--text-paragraph-color);

    padding: var(--padding-medium);

    color: var(--text-paragraph-color);
    background-color: transparent;

    font-family: var(--font-paragraph);
    font-size: var(--font-size-medium);
  }
</style>
