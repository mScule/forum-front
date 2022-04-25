<template>
  <SubView title="Post" return-to="home">

  </SubView>
</template>

<script>
import SubView from "@/components/views/SubView";
export default {
  name: "PostSubView",
  components: {SubView},
  methods: {
    setPostId(postId) {
      this.postId = postId;
      console.log(this.postId);
    }
  },
  data() {
    return {
      postId: String,
    }
  },
}
</script>

<style scoped>

</style>