<!--
  The main view of the website.
-->

<script>
import user from "@/utilities/user";

import ViewBase from "@/components/views/BaseView";
import PostLink from "@/components/content/PostLink";
import IconButton from "@/components/buttons/IconButton";
import LoadingAnimatedIcon from "@/components/icons/animated-icons/LoadingAnimatedIcon";

export default {
  name: "HomeView",
  components: {
    LoadingAnimatedIcon,
    IconButton,
    PostLink,
    ViewBase,
  },
  props: {
    posts: null,
  },
  methods: {
    bottomMargin() {
      if (this.user().hasLoggedIn())
        return "home-view-user-has-logged-in";
      return "";
    }
  },
  data() {
    return {
      user: () => user,
    }
  },
  mounted() {
    this.$emit("update-posts");
  }
}
</script>

<template>
  <ViewBase title="Post feed">
    <template v-slot:header>
      <IconButton icon-name="help" @click="$emit('change-view','home-help')"/>
    </template>

    <template v-slot:content>
      <div id="home-view-posts" :class="bottomMargin()">
        <template v-if="this.posts">
          <template v-for="post in this.posts" :key="post.publication_id">
            <PostLink
                :post-name="post.title"
                :author-name="post.name"
                :up-votes="post.upvotes"
                :down-votes="post.downvotes"
                :date="new Date(post.date)"
                @click="$emit('open-post', post.publication_id)"
            />
          </template>
        </template>
        <LoadingAnimatedIcon/>
      </div>
    </template>
  </ViewBase>
</template>

<style scoped>
.home-view-user-has-logged-in {
  margin-bottom: calc(5em + var(--margin-medium));
}

#home-view-posts {
  height: max-content;
}

#home-view-posts * {
  margin-top: var(--margin-medium);
}

#home-view-posts *:first-child {
  margin-top: 0;
}
</style>
