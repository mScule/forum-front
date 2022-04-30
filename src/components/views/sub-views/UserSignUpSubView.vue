<template>
  <SubView title="Sign up" return-to="user">
    <NotificationSign
        type="information"
        message="By continuing, you are setting up a Forum acconut and agree to our User Agreement and Privacy Policy."
    />

    <SubSection title="Give information needed for new user">
      <FormSection>
        <FormRow place="first">
          <label for="username">Username</label>

          <input
              type="text"
              id="username"
              v-model.trim="fields.name"
              placeholder="Username"
              required
          />
        </FormRow>

        <FormRow>
          <label for="email">Email</label>

          <input
              type="email"
              id="email"
              v-model="fields.email"
              placeholder="Email address"
              required
          />
        </FormRow>

        <FormRow place="last">
          <label for="password">Password</label>
          <input
              type="password"
              id="password"
              v-model="fields.password"
              placeholder="Password"
              required
          />

          <label for="passord-repeated">Repeat password</label>
          <input
              type="password"
              id="passord-repeated"
              v-model="fields.passwordRepeated"
              placeholder="Repeat password"
              required
          />
        </FormRow>

        <TextButton @click="signup()" text="Sign up"/>
      </FormSection>
    </SubSection>
  </SubView>
</template>

<script>
import userSignup from "@/api/features/user/user-signup";

import NotificationSign from "@/components/notifications/NotificationSign";
import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";
import TextButton from "@/components/buttons/TextButton";

export default {
  name: "UserSignUpSubView",
  components: {TextButton, FormRow, FormSection, SubSection, SubView, NotificationSign},
  methods: {
    signup() {
      if (this.fields.password !== this.fields.passwordRepeated) {
        this.$emit("alert", {type: "error", message: "Repeated password doesn't match"});
        return;
      }

      userSignup.userSignup(this.fields).then(success => {
        if (success)
          this.$emit("alert", {
            type: "success",
            message: "Signup was successfull! You can sign in to your new acconut."
          });
        else
          this.$emit("alert", {type: "error", message: "Signup was unsuccessfull"});
      });
    }
  },
  data() {
    return {
      fields: {
        name: "",
        email: "",
        password: "",
        passwordRepeated: "",
      }
    }
  }
}
</script>

<style scoped>

</style>
