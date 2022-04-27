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

          <input type="text" id="username" name="username" placeholder="Username"/>
        </FormRow>

        <FormRow>
          <label for="email">Email</label>

          <input type="email" id="email" name="email" placeholder="Email address"/>
        </FormRow>

        <FormRow place="last">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password"/>

          <label for="passord-repeated">Repeat password</label>
          <input type="password" id="passord-repeated" name="password-repeated" placeholder="Repeat password"/>
        </FormRow>

        <TextButton text="Sign up"/>
      </FormSection>
    </SubSection>
  </SubView>
</template>

<script>
import NotificationSign from "@/components/notifications/NotificationSign";
import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";
import TextButton from "@/components/buttons/TextButton";

export default {
  name: "UserSignUpSubView",
  components: {TextButton, FormRow, FormSection, SubSection, SubView, NotificationSign}
}
</script>

<style scoped>

</style>
