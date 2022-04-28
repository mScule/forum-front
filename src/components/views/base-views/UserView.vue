<template>
  <ViewBase title="User">
    <template v-slot:content>
      <template v-if="user().hasLoggedIn()">
        <SubSection title="Change user information">
          <FormSection>
            <FormRow place="first">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" :placeholder="userName"/>
            </FormRow>

            <FormRow>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" :placeholder="userEmail"/>
            </FormRow>

            <FormRow>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password"/>

              <label for="passord-repeated">Repeat password</label>
              <input type="password" id="passord-repeated" name="password-repeated" placeholder="Repeat password"/>
            </FormRow>

            <FormRow place="last">
              <p><i>If you are sure that you want to change your user information, you'll have to give your current
                password.</i></p>
              <label for="password-current"/>
              <input type="password" id="password-current" name="password-current" placeholder="Current password"/>
            </FormRow>
          </FormSection>

          <TextButton text="Change user information"/>
        </SubSection>

        <SubSection title="Logout">
          <TextButton @click="logout()" text="logout"/>
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
import userLogout from "@/api/features/user-logout";
import userData from "@/api/features/user-data";

import ViewBase from "@/components/views/BaseView";
import SubSection from "@/components/content/SubSection";
import TextButton from "@/components/buttons/TextButton";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";

export default {
  name: "UserView",
  components: {
    FormRow,
    FormSection,
    TextButton,
    ViewBase,
    SubSection,
  },
  methods: {
    user: () => user,
    logout() {
      user.setLoginStatus(false);
      userLogout.userLogout().then(res => {
        if (!res) {
          this.$emit("alert", {
            type: "error",
            message: "You have been signed out already"
          });
          this.$emit("change-view", "home");
          return;
        }

        this.$emit("alert", {type: "success", message: "You have successfully been signed out."});
        this.$emit("change-view", "home");
      })
    },
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
      }
    }
  },
  computed: {
    userName() {
      return this.userData.name;
    },
    userEmail() {
      return this.userData.email;
    },
  },
  mounted() {
    if (this.user().hasLoggedIn()) {
      userData.userData.get().then(data => {
        console.log(data);
        this.userData.name = data.name;
        this.userData.email = data.email;
      })
    }
  }
}
</script>

<style scoped>

</style>
