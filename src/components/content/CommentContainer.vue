<template>
  <div class="comment-container border">
    <h5>{{ author }}:</h5>
    <p>{{ comment }}</p>
    <div class="row-between">
      <div class="comment-container-date">
        <p class="vertical-center">Date: {{ `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` }}</p>
      </div>

      <div class="row-between comment-container-post-buttons">
        <IconButton v-if="authorIsUser" icon-name="private"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "@/components/buttons/IconButton";

export default {
  name: "CommentContainer",
  components: {
    IconButton,
  },
  props: {
    author: String,
    comment: String,
    upVotes: Number,
    downVotes: Number,
    date: Date,
    authorIsUser: Boolean,
  }
}
</script>

<style scoped>
h5 {
  margin-top: 0;
  margin-bottom: var(--margin-small);
}
.comment-container {
  padding: var(--padding-medium);
  margin-top: var(--margin-medium);
}

.comment-container:first-child {
  margin-top: 0;
}

.comment-container-vote-section > *:first-child,
.comment-container-post-buttons > * {
  margin-right: var(--margin-medium);
}

.comment-container-post-buttons > *:last-child {
  margin-right: 0;
}

.comment-container-vote-section, .comment-container-date {
  font-size: var(--font-size-small);
  width: 100%;
}
</style>