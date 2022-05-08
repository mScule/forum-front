<!--
  Sub view for user login form.
-->

<script>
import user from "@/utilities/user";
import userLogin from "@/api/features/user/user-login";
import userData from "@/api/features/user/user-data";

import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import TextButton from "@/components/buttons/TextButton";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";

export default {
  name: "UserLoginSubView",
  components: {FormRow, FormSection, TextButton, SubSection, SubView},
  methods: {
    login() {
      userLogin.userLogin(this.fields).then(res => {
        if (!res) {
          user.setLoginStatus(false);
          this.$emit("alert", {type: "error", message: "Login was unsuccessfull. Check your username, and password"});
          this.$emit("change-view", "home");
          return;
        }
        user.setLoginStatus(true);
        userData.userData.get()
            .then(data => {
              user.setUserId(data.user_id);
              this.$emit("alert", {type: "success", message: "Login was successfull. Welcome in!"});
              this.$emit("change-view", "home");
            })
            .catch(() => {
              user.setLoginStatus(false);
              this.$emit("alert", {type: "error", message: "Error while fetching user data login aborted"});
              this.$emit("change-view", "home");
            })
      });
    }
  },
  data() {
    return {
      fields: {
        name: "",
        password: "",
      }
    }
  }
}
</script>

<template>
  <SubView title="Login" return-to="user">
    <SubSection title="Give your email, and password">
      <FormSection>
        <FormRow place="first">
          <label for="username">Username</label>
          <input
              type="text"
              v-model="fields.name"
              id="username"
              placeholder="Username"
              required
          />
        </FormRow>
        <FormRow place="last">
          <label for="password">Password</label>
          <input
              type="password"
              v-model="fields.password"
              id="password"
              placeholder="password"
              required
          />
        </FormRow>
        <TextButton @click="login()" text="Login"/>
      </FormSection>
    </SubSection>
  </SubView>
</template>
