<template>
  <section class="border-top">
    <IconButton icon-name="add" @click="$emit('change-view','post-creation')"/>
  </section>
</template>

<script>
import IconButton from "@/components/buttons/IconButton";
export default {
  name: "BottomBar",
  components: { IconButton }
}
</script>

<style scoped>
section {
  position: fixed;
  bottom: 0;
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
