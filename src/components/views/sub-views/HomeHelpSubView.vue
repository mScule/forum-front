<template>
  <SubView title="Post feed - help" return-to="home">
    <SubSection class="home-help-sub-view-explanations" title="Post color codes">
      <p>
        The color codes indicate the reception of the posts.
        Color codes are explained below.
      </p>
      <div>
        <h3>Good post</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--good"
            explanation="Post has 1 or more votes."
        />
      </div>

      <div>
        <h3>Neutral post</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--neutral"
            explanation="Post has 0 votes."
        />
      </div>

      <div>
        <h3>Controversial post</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--bad-slightly"
            explanation="Post has negative votes, but less than 10."
        />
      </div>

      <div>
        <h3>Toxic post</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--bad"
            explanation="Post has 10 or more negative votes."
        />
      </div>
    </SubSection>
  </SubView>
</template>

<script>
import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import IconExplainer from "@/components/icons/IconExplainer";

export default {
  name: "HomeHelpSubView",
  components: {IconExplainer, SubSection, SubView}
}
</script>

<style scoped>
 .home-help-sub-view-explanations div{
   border-bottom-style: solid;
   border-bottom-color: var(--border-color);
   border-bottom-width: var(--border-width);
   padding-bottom: var(--padding-medium);
 }
 .home-help-sub-view-explanations div:last-child {
   border: none;
   padding-bottom: 0;
 }
</style>