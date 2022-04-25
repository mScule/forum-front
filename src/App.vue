<template>
<main>
  <TopBar @change-view="changeView"/>
  <component @open-post="openPost" @change-view="changeView" :is="selectedView"></component>
  <BottomBar @change-view="changeView" v-if="user().hasLoggedIn() && selectedView.name === 'HomeView'"/>
</main>
</template>

<script>
import cookies from "@/utilities/cookies";
import millis from "@/utilities/millis";
import user from "@/utilities/user";

import TopBar from "@/components/content/TopBar";
import BottomBar from "@/components/content/BottomBar";

import HomeView from "@/components/views/base-views/HomeView";
import HomeHelpSubView from "@/components/views/sub-views/HomeHelpSubView";

import UserView from "@/components/views/base-views/UserView";
import UserLoginSubView from "@/components/views/sub-views/UserLoginSubView";
import UserSignUpSubView from "@/components/views/sub-views/UserSignUpSubView";

import PostCreationSubView from "@/components/views/sub-views/PostCreationSubView";
import PostSubView from "@/components/views/sub-views/PostSubView";

export default {
  name: "App",
  components: {
    BottomBar,
    TopBar,
    HomeView,
    HomeHelpSubView,
    UserView,
    UserLoginSubView,
    UserSignUpSubView,
    PostCreationSubView,
    PostSubView,
  },
  data() {
    return {
      selectedView: HomeView,
    }
  },
  methods: {
    changeView (viewName) {
      switch (viewName) {
        case "home": return this.selectedView = HomeView;
        case "home-help": return this.selectedView = HomeHelpSubView;
        case "user": return this.selectedView = UserView;
        case "user-login": return this.selectedView = UserLoginSubView;
        case "user-sign-up": return this.selectedView = UserSignUpSubView;
        case "post-creation": return this.selectedView = PostCreationSubView;
      }
    },
    openPost (postId) {
      this.selectedView = PostSubView;
      PostSubView.methods.setPostId(postId);
    },
    cookies: () => cookies,
    millis: () => millis,
    user: () => user,
  },
  mounted() {
    this.cookies().set("forum_api_key", "0", this.millis().fromMinutes(5));
  }
}
</script>

<style>
@import "./assets/styles/colors.css";
@import "./assets/styles/theme.css";
@import "./assets/styles/elements.css";
@import "./assets/styles/components.css";
</style>
