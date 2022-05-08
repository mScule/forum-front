<!--
  Link to a post.

  Attributes:
    post-name:   Name of the post.
    author-name: Name of the author.
    up-votes:    Amount of upvotes.
    down-votes:  Amount of downvotes.
    date:        Date when the post was created.
-->

<script>
export default {
  name: "PostLink",
  props: {
    postName: String,
    authorName: String,
    upVotes: Number,
    downVotes: Number,
    date: Date,
  },
  methods: {
    colorWithVoteRatio() {
      const upVotesLeft = this.$props.upVotes - this.$props.downVotes;
      let color = "--neutral";

      if (upVotesLeft > 0)
        color = "--good"

      else if (upVotesLeft < 0 && upVotesLeft > -10)
        color = "--bad-slightly";

      else if (upVotesLeft <= -10)
        color = "--bad";

      return color;
    }
  }
}
</script>

<template>
  <div class="border post-link-container">
    <header class="post-link-name-header border-bottom">
      <h4 class="post-link-header-bg">{{ postName }}</h4>
    </header>

    <section class="post-link">
      <div class="post-link-info-row">
        <p>Author: <i>{{ authorName }}</i></p>
      </div>

      <div class="post-link-info-row">
        <p class="post-link-date">Date: <i>{{ `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` }}</i></p>
      </div>
    </section>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
}

header h4 {
  margin-top: 0;
  margin-bottom: var(--margin-medium);
}

.post-link-container {
  cursor: pointer;
  border-radius: var(--border-radius-sharp);
}

.post-link-name-header h4 {
  margin: 0;
  padding: var(--padding-medium);
  overflow: hidden;
}

.post-link-header-bg {
  background-color: var(--border-color);
}

.post-link-info-row {
  display: flex;
  flex-direction: row;
}

p {
  width: 100%;
}

.post-link-info-row {
  justify-content: space-between;
}

.post-link-date {
  text-align: right;
}

.post-link {
  padding: var(--padding-medium);
  border-radius: var(--border-radius-round);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post-link:first-child {
  margin-top: 0;
}
</style>
