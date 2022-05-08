<!--
  The "main" component of the website.
-->

<script>
import user from "@/utilities/user";
import postFetching from "@/api/features/post/post-fetching";

import TopBar from "@/components/content/TopBar";
import BottomBar from "@/components/content/BottomBar";

import HomeView from "@/components/views/base-views/HomeView";
import HomeHelpSubView from "@/components/views/sub-views/HomeHelpSubView";

import UserView from "@/components/views/base-views/UserView";
import UserLoginSubView from "@/components/views/sub-views/UserLoginSubView";
import UserSignUpSubView from "@/components/views/sub-views/UserSignUpSubView";

import PostCreationSubView from "@/components/views/sub-views/PostCreationSubView";
import PostSubView from "@/components/views/sub-views/PostSubView";

import NotificationAlert from "@/components/notifications/NotificationAlert";

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
    NotificationAlert,
  },

  data() {
    return {
      selectedView: HomeView,
      notificationAlertProps: null,
      posts: null,
      postId: null,
    }
  },

  mounted() {
    this.updatePosts();
  },

  computed: {
    notification: function () {
      return this.notificationAlertProps !== null;
    },
    loadedPosts() {
      return this.posts;
    },
    getPostId() {
      return this.postId;
    }
  },

  methods: {
    user: () => user,
    changeView(viewName) {
      switch (viewName) {
        case "home":
          return this.selectedView = HomeView;
        case "home-help":
          return this.selectedView = HomeHelpSubView;
        case "user":
          return this.selectedView = UserView;
        case "user-login":
          return this.selectedView = UserLoginSubView;
        case "user-sign-up":
          return this.selectedView = UserSignUpSubView;
        case "post-creation":
          return this.selectedView = PostCreationSubView;
      }
    },
    openPost(postId) {
      this.selectedView = PostSubView;
      this.postId = postId;
    },
    showAlert(alert) {
      this.notificationAlertProps = {
        type: alert.type,
        message: alert.message,
      };
    },
    closeAlert() {
      this.notificationAlertProps = null;
    },
    updatePosts() {
      postFetching.fetchAll().then(posts => this.posts = posts);
    },
  }
}
</script>

<template>
  <main>
    <TopBar @change-view="changeView"/>

    <NotificationAlert
        v-if="notification"
        @close-notification-alert="closeAlert()"
        :type="notificationAlertProps.type"
        :message="notificationAlertProps.message"
    />

    <div class="content-zone-wrapper">
      <div class="content-zone">
        <component
            @alert="showAlert"
            @open-post="openPost"
            @change-view="changeView"
            @update-posts="updatePosts"

            :post-id="getPostId"
            :posts="loadedPosts"
            :is="selectedView">
        </component>
      </div>
    </div>

    <BottomBar
        @change-view="changeView"
        v-if="this.user().hasLoggedIn() && selectedView.name === 'HomeView'"
    />
  </main>
</template>

<style>
@import "./assets/styles/colors.css";
@import "./assets/styles/theme.css";
@import "./assets/styles/elements.css";
@import "./assets/styles/components.css";
</style>
