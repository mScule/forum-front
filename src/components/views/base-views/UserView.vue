<template>
<ViewBase title="User">
  <template v-slot:content>
    <template v-if="user().hasLoggedIn()">
      <SubSection title="You done here?">
        <TextButton text="Yep log me out"/>
      </SubSection>
    </template>
    <template v-else>
      <SubSection title="Returning users">
        <TextButton text="Login" @click="$emit('change-view','user-login')"/>
      </SubSection>
      <SubSection title="New users">
        <TextButton text="Sign up" @click="$emit('change-view','user-sign-up')"/>
      </SubSection>
    </template>
  </template>
</ViewBase>
</template>

<script>
import user from "@/utilities/user";

import ViewBase from "@/components/views/BaseView";
import SubSection from "@/components/content/SubSection";
import TextButton from "@/components/buttons/TextButton";
export default {
  name: "UserView",
  components: {
    TextButton,
    ViewBase,
    SubSection,
  },
  methods: {
    user: () => user,
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
