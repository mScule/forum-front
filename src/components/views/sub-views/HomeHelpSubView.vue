<template>
  <SubView title="Post feed - help" return-to="home">
    <SubSection class="home-help-sub-view-explanations" title="Post color codes">
      <p>
        The color codes indicate the reception of the posts.
        Color codes are explained below.
      </p>
      <div>
        <h3>Fine</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--good"
            explanation="Post has more positive votes than negative ones. Post author is fine (for now)"
        />
      </div>

      <div>
        <h3>50/50</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--neutral"
            explanation="Post has 0 votes. Post author is on the edge."
        />
      </div>

      <div>
        <h3>You are trash</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--bad-slightly"
            explanation="Post has negative votes, but less than 30. Post author is presumably trash."
        />
      </div>

      <div>
        <h3>Delete System32</h3>
        <IconExplainer
            icon-name="square"
            icon-color="--bad"
            explanation="Post has 30 or more negative votes. Post author should stop using any social media altogether."
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