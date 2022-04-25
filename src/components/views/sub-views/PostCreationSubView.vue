<template>
<SubView title="Create post" return-to="home">
  <SubSection title="Give title for your post">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" placeholder="Title"/>
  </SubSection>

  <SubSection title="Give some content">
    <div class="row-between">
      <label for="content">Content</label>
      <IconButton icon-name="markdown"/>
    </div>

    <textarea id="content"></textarea>
  </SubSection>

  <SubSection title="Publish the post">
    <NotificationSign
        type="warning"
        message="Remember. You can't delete your posts, so think twice what type of content you want to put out. Everything you publish can be tracked back to you."
    />

    <TextButton text="Publish"/>
  </SubSection>
</SubView>
</template>

<script>
import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import NotificationSign from "@/components/signs/NotificationSign";
import IconButton from "@/components/buttons/IconButton";
import TextButton from "@/components/buttons/TextButton";

export default {
  name: "PostCreationSubView",
  components: {
    TextButton,
    IconButton,
    NotificationSign,
    SubSection,
    SubView,
  }
}
</script>

<style scoped>
  textarea {
    margin: 0;
  }
</style>
