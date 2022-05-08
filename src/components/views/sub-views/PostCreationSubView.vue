<!--
  Sub view where user can create posts.
  Is only avaliable when user has logged in.
-->

<script>
import postCreation from "@/api/features/post/post-creation";

import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import NotificationSign from "@/components/notifications/NotificationSign";
import TextButton from "@/components/buttons/TextButton";

export default {
  name: "PostCreationSubView",
  components: {
    TextButton,
    NotificationSign,
    SubSection,
    SubView,
  },
  methods: {
    createPost() {
      postCreation.postCreation(this.postFields).then(res => {
        if (!res) {
          this.$emit("alert", {type: "error", message: "Post creation was unsuccessfull..."});
          return;
        }
        this.$emit("alert", {type: "success", message: "Post creation was successfull!"});
        this.postFields.title = "";
        this.postFields.content = "";
      });
    }
  },
  data() {
    return {
      postFields: {
        title: "",
        content: "",
      }
    }
  }
}
</script>

<template>
  <SubView title="Create post" return-to="home">
    <SubSection title="Give title for your post">
      <label for="title">Title</label>
      <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          v-model="postFields.title"
      />
    </SubSection>

    <SubSection title="Give some content">
      <label for="content">Content</label>
      <textarea id="content" v-model="postFields.content"></textarea>
    </SubSection>

    <SubSection title="Publish the post">
      <NotificationSign
          type="warning"
          message="Remember. You can't delete your posts, so think twice what type of content you want to put out. Everything you publish can be tracked back to you."
      />
      <TextButton text="Publish" @click="createPost()"/>
    </SubSection>
  </SubView>
</template>

<style scoped>
textarea {
  margin-bottom: 0;
}
</style>
