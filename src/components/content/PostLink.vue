<template>
  <div class="post-link border">
    <header>
      <h2>{{ authorName }}:</h2>
      <h3 :style="`color: var(${colorWithVoteRatio()})`">{{ postName }}</h3>
    </header>
    <div class="post-link-info-row">
      <p>Votes: <b>{{ upVotes - downVotes }}</b></p>
      <p>Date:
        <b>{{ `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostLink",
  props: {
    color: String,
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

<style scoped>
header {
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
}

header h3 {
  margin-top: 0;
  margin-bottom: var(--margin-medium);
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

.post-link {
  cursor: pointer;
  padding: var(--padding-medium);
  border-radius: var(--border-radius-round);
  border-color: var(--text-paragraph-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: var(--margin-medium);
}

.post-link:first-child {
  margin-top: 0;
}
</style>
