<!--
  Component that resembles the form row.

  Attributes
    place: Has 3 modes. "first", "last", and "middle".
           To use "middle" option, don't give any value as attribute.
-->

<script>
export default {
  name: "FormRow",
  props: {
    place: String
  }
}
</script>

<template>
  <div v-if="place === 'first'" class="first">
    <slot></slot>
  </div>

  <div v-else-if="place === 'last'" class="last">
    <slot></slot>
  </div>

  <div v-else class="middle">
    <slot></slot>
  </div>
</template>

<style scoped>

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.first, .middle {
  padding-bottom: var(--margin-medium);
  border-bottom-style: solid;
  border-bottom-width: var(--border-width);
  border-bottom-color: var(--border-color);
}

.middle, .last {
  margin-top: var(--margin-medium);
}
</style>
