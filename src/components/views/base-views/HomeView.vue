<template>
<ViewBase title="Post feed">
  <template v-slot:header>
    <IconButton icon-name="help" @click="$emit('change-view','home-help')"/>
  </template>

  <template v-slot:content>
    <PostLink
        post-name="Top 10 proofs that the earth is flat."
        author-name="ThirdEyeFreak1"
        up-votes="4"
        down-votes="45"
        :date="new Date(2022, 4, 22)"
    />
    <PostLink
        post-name="These types of forums sucks ass"
        author-name="Liam Carollz33"
        up-votes="4"
        down-votes="2"
        :date="new Date(2022, 2, 14)"
    />
    <PostLink
        post-name="These types of forums sucks ass"
        author-name="Liam Carollz33"
        up-votes="4"
        down-votes="2"
        :date="new Date(2022, 2, 14)"
    />
    <PostLink
        post-name="Top 10 proofs that the earth is flat."
        author-name="Jack Wilson"
        up-votes="4"
        down-votes="45"
        :date="new Date(2022, 4, 22)"
    />
    <PostLink
        post-name="Top 10 proofs that the earth is flat."
        author-name="Jack Wilson"
        up-votes="4"
        down-votes="45"
        :date="new Date(2022, 4, 22)"
    />
  </template>
</ViewBase>
</template>

<script>
import ViewBase from "@/components/views/BaseView";
import PostLink from "@/components/content/PostLink";
import IconButton from "@/components/buttons/IconButton";
export default {
  name: "HomeView",
  components: {
    IconButton,
    PostLink,
    ViewBase,
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>