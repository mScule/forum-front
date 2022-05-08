<!--
  Sub view for reading posts.
-->

<script>
import user from "@/utilities/user";
import commentCreation from "@/api/features/comment/comment-creation";
import commentFetching from "@/api/features/comment/comment-fetching";
import publicationDeletion from "@/api/features/publication/publication-deletion";

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
    fetchComments() {
      commentFetching.postReplies({postId: this.postId})
          .then(
              comments => {
                if (typeof comments === "object" && comments.length > 0)
                  this.comments = comments;
                else
                  this.comments = null;
              }
          )
    },
    createComment() {
      commentCreation.commentCreation({userComment: this.userComment, postId: this.postId})
          .then(res => {
            if (!res) {
              this.$emit("alert", {type: "error", message: "Comment creation failed"});
              return;
            }
            this.$emit("alert", {type: "success", message: "Comment creation successfull"});
            this.fetchComments();
            this.userComment = "";
          });
    },
    privateComment(commentId) {
      publicationDeletion.delete(commentId).then(() => {
        setTimeout(() => {
          this.fetchComments()
        }, 100);
      });
    },
    privatePost() {
      publicationDeletion.delete(this.postId).then(() => {
        this.$emit("change-view", "home");
      })
    }
  },
  props: {
    postId: Number,
    posts: null,
  },
  data() {
    return {
      title: "Title goes here",
      author: "Author name goes here",
      content: "Content goes here",
      date: new Date(2000, 1, 1),
      upVotes: 0,
      downVotes: 0,
      commentAmt: 0,
      authorIsUser: false,
      comments: null,
      userComment: "",
    }
  },
  mounted() {
    for (const post of this.posts) {
      if (post.publication_id === this.postId) {
        this.title = post.title;
        this.author = post.name;
        this.content = post.content;
        this.date = new Date(post.date);
        this.upVotes = post.upvotes;
        this.downVotes = post.downvotes;
        this.authorIsUser = post.user_id == this.user().id();
        break;
      }
    }
    this.fetchComments();
  }
}
</script>

<template>
  <SubView :title="title" return-to="home">
    <h4>Author: {{ author }}</h4>
    <p>{{ content }}</p>
    <div class="row-between">
      <p class="vertical-center">Date: {{ `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}` }}</p>
      <div class="row-between post-sub-view-post-buttons">
        <IconButton v-if="authorIsUser" @click="privatePost" icon-name="private"/>
      </div>
    </div>
    <template v-if="comments">
      <h4>Comments: </h4>
      <template v-for="comment of comments" :key="comment.postId">
        <CommentContainer
            v-if="comment.user_id == this.user().id()"
            :author="comment.name"
            :comment="comment.content"
            :up-votes="comment.upvotes"
            :down-votes="comment.downvotes"
            :date="new Date(comment.date)"
            :author-is-user="true"
            @click="privateComment(comment.publication_id)"
        />
        <CommentContainer
            v-else
            :author="comment.name"
            :comment="comment.content"
            :up-votes="comment.upvotes"
            :down-votes="comment.downvotes"
            :date="new Date(comment.date)"
            :author-is-user="false"
        />
      </template>
    </template>
    <SubSection title="Write a comment">
      <template v-if="user().hasLoggedIn()">
        <NotificationSign
            type="warning"
            message="Remember. You can't delete your comments, so think twice what type of content you want to put out. Everything you publish can be tracked back to you."
        />
        <textarea id="user-comment" v-model="userComment"></textarea>
        <TextButton @click="createComment" text="Publish"/>
      </template>

      <template v-else>
        <NotificationSign type="information" message="To comment on posts, you have to be logged in."/>
      </template>
    </SubSection>
  </SubView>
</template>

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
