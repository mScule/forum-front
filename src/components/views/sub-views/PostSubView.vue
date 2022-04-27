<template>
  <SubView :title="title" return-to="home">
    <h4>Author: {{ author }}</h4>
    <p>{{ content }}</p>
    <div class="row-between">
      <div class="row-left post-sub-view-vote-section">
        <p class="vertical-center">Upvotes: {{ upVotes }}</p>
        <p class="vertical-center">Downvotes: {{ downVotes }}</p>
      </div>
      <div class="post-sub-view-date">
        <p class="vertical-center">Date: {{ `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` }}</p>
      </div>
      <div class="row-between post-sub-view-post-buttons">
        <IconButton icon-name="vote-up" size="medium"/>
        <IconButton icon-name="vote-down" size="medium"/>
        <IconButton v-if="authorIsUser" icon-name="private"/>
      </div>
    </div>
    <h4>Comments: </h4>
    <CommentContainer
        author="Jack Collin"
        comment="Hello there"
        :date="new Date(2022, 4, 26)"
        up-votes="1"
        down-votes="0"
    />
    <CommentContainer
        author="Jack Collin"
        comment="Hello there"
        :date="new Date(2022, 4, 26)"
        up-votes="1"
        down-votes="0"
        author-is-user="true"
    />
    <CommentContainer
        author="User"
        comment="Hello there"
        :date="new Date(2022, 4, 26)"
        up-votes="1"
        down-votes="0"
    />
    <CommentContainer
        author="Jack Collin"
        comment="Hello there"
        :date="new Date(2022, 4, 26)"
        up-votes="1"
        down-votes="0"
    />
    <SubSection title="Write a comment">
      <template v-if="user().hasLoggedIn()">
        <NotificationSign
            type="warning"
            message="Remember. You can't delete your comments, so think twice what type of content you want to put out. Everything you publish can be tracked back to you."
        />
        <textarea id="user-comment"></textarea>
        <TextButton text="Publish"/>
      </template>

      <template v-else>
        <NotificationSign type="information" message="To comment on posts, you have to be logged in."/>
      </template>
    </SubSection>
  </SubView>
</template>

<script>
import user from "@/utilities/user";

import SubView from "@/components/views/SubView";
import IconButton from "@/components/buttons/IconButton";
import SubSection from "@/components/content/SubSection";
import CommentContainer from "@/components/content/CommentContainer";
import TextButton from "@/components/buttons/TextButton";
import NotificationSign from "@/components/notifications/NotificationSign";

export default {
  name: "PostSubView",
  components: {TextButton, CommentContainer, SubSection, IconButton, SubView, NotificationSign},
  methods: {
    user: () => user,
    setPostId(postId) {
      this.id = postId;
      console.log(this.postId);
    }
  },
  data() {
    return {
      id: String,
      title: "Title goes here",
      author: "Author name goes here",
      content: "Content goes here",
      date: new Date(2000, 1, 1),
      upVotes: 0,
      downVotes: 0,
      commentAmt: 0,
      authorIsUser: true,
    }
  },
}
</script>

<style scoped>
#user-comment {
  max-height: 10em;
}

.post-sub-view-vote-section > *:first-child,
.post-sub-view-post-buttons > * {
  margin-right: var(--margin-medium);
}

.post-sub-view-post-buttons > *:last-child {
  margin-right: 0;
}

.post-sub-view-vote-section, .post-sub-view-date {
  font-size: var(--font-size-small);
  width: 100%;
}

.post-sub-view-date {
  text-align: center;
}
</style>
