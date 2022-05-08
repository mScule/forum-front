<!--
  The top navigation bar of the website.
-->

<script>
import IconButton from "@/components/buttons/IconButton";

export default {
  name: "TopBar",
  components: {IconButton}
}
</script>

<template>
  <nav class="border-bottom">
    <IconButton icon-name="home" @click="$emit('change-view','home')"/>
    <header><h1 class="vertical-center">F🤬rum</h1></header>
    <IconButton icon-name="user" @click="$emit('change-view','user')"/>
  </nav>
</template>

<style scoped>
nav {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 5em;
  background-color: var(--background-color);
}

header {
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
}
</style>
