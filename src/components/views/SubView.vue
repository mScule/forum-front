<!--
  Base component for sub views.
  Sub views "pops" on top of the ordinary base view, and can be closed by clicking the "X" button.

  Attributes
    title:     The title of the subview.
    return-to: Name of the view that user will be forwarded to after clicking "X".
-->

<script>
import BaseView from "@/components/views/BaseView";
import IconButton from "@/components/buttons/IconButton";

export default {
  name: "SubView",
  components: {IconButton, BaseView},
  props: {
    title: String,
    returnTo: String,
  }
}
</script>

<template>
  <BaseView :title="title">
    <template v-slot:header>
      <IconButton icon-name="close" size="large" @click="$emit('change-view', returnTo)"/>
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </BaseView>
</template>
