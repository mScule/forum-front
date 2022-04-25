<template>
  <ViewBase :title="title">
    <template v-slot:header>
      <IconButton icon-name="close" size="large" @click="$emit('change-view', returnTo)"/>
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from "@/components/views/BaseView";
import IconButton from "@/components/buttons/IconButton";
export default {
  name: "SubView",
  components: {IconButton, ViewBase},
  props: {
    title: String,
    returnTo: String,
  }
}
</script>

<style scoped>

</style>