<!--
  Sub view for help section that explains the meaning of the website.
  It also contains the link to the api, and credits.
-->

<script>
import apiConfig from "@/api/api-config";

import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";

export default {
  name: "HomeHelpSubView",
  components: {SubSection, SubView},
  data() {
    return {
      apiUrl: apiConfig.url,
    }
  }
}
</script>

<template>
  <SubView title="Forum - help" return-to="home">
    <SubSection class="home-help-sub-view-explanations" title="F🤬rum website ">
      <div>
        <h3>What's up?</h3>
        <p>
          You can read, comment, and create posts in here and that's about it.
          To comment and create posts, you'll have to create an acconut.
        </p>
      </div>
      <div>
        <h3>API</h3>
        <p>To see what the api has to offer please visit:</p>
        <br>
        <a :href="`${apiUrl}api-docs`">{{ apiUrl }}api-docs/</a>
        <h4>Note:</h4>
        <p>Most of the queries needs the user session token!</p>
      </div>
      <div>
        <h3>Credits</h3>
        <p>Frontend: <b>Vilhelm Niemi</b></p>
        <p>Backend: <b>Jonathan Methuen</b></p>
      </div>
    </SubSection>
  </SubView>
</template>

<style scoped>
.home-help-sub-view-explanations div {
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
