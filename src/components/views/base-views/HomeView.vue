<template>
  <ViewBase title="Post feed">
    <template v-slot:header>
      <IconButton icon-name="help" @click="$emit('change-view','home-help')"/>
    </template>

    <template v-slot:content>
      <div id="home-view-posts" :class="bottomMargin()">
        <PostLink
            post-name="Klikattava esimerkki"
            author-name="Klikkendaalen"
            up-votes="0"
            down-votes="0"
            :date="new Date(2022, 4, 25)"
            @click="$emit('open-post','post-id-test')"
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
        <LoadingAnimatedIcon/>
      </div>
    </template>
  </ViewBase>
</template>

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
  }
}
</script>

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