<template>
<SubView title="Login" return-to="user">
    <SubSection title="Give your email, and password">
      <FormSection>
        <FormRow place="first">
          <label for="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="email address" required/>
        </FormRow>
        <FormRow place="last">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="password" required/>
        </FormRow>
        <TextButton text="Login"/>
      </FormSection>
    </SubSection>
</SubView>
</template>

<script>
import SubView from "@/components/views/SubView";
import SubSection from "@/components/content/SubSection";
import TextButton from "@/components/buttons/TextButton";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";
export default {
  name: "UserLoginSubView",
  components: {FormRow, FormSection, TextButton, SubSection, SubView}
}
</script>
