<template>
  <ViewBase title="User">
    <template v-slot:content>
      <template v-if="user().hasLoggedIn()">
        <SubSection title="Change user information">
          <NotificationSign
              type="information"
              message="Due to devs being lazy, you'll have to change every user information at the same time 😔"
          />
          <FormSection>
            <FormRow>
              <label for="username">Username</label>
              <input
                  type="text"
                  id="username"
                  :placeholder="userInfoComputed.username_current"
                  v-model="userInfo.username_new"
              />
            </FormRow>

            <FormRow>
              <label for="email">Email</label>
              <input
                  type="email"
                  id="email"
                  :placeholder="userInfoComputed.email_current"
                  v-model="userInfo.email_new"
              />
            </FormRow>

            <FormRow>
              <label for="password">Password</label>
              <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  v-model="userInfo.password_new"
              />

              <label for="passord-repeated">Repeat password</label>
              <input
                  type="password"
                  id="passord-repeated"
                  placeholder="Repeat password"
                  v-model="userInfo.password_new_repeated"
              />
            </FormRow>

            <FormRow>
              <NotificationSign
                  type="warning"
                  message="If you decide to remove your acconut, you can't revert the changes!"
              />
              <label for="user-deletion">Delete user</label>
              <input
                  type="checkbox"
                  id="user-deletion"
                  v-model="userInfo.disabled"
              />
            </FormRow>

            <FormRow place="last">
              <p><i>To confirm your changes, you'll have to give your current. Login info</i></p>
              <label for="email-current">Email</label>
                <input
                    type="email"
                    id="email-current"
                    placeholder="Your current username"
                    v-model="userInfo.email_current"
                />

                <label for="password-current">Password</label>
                  <input
                      type="password"
                      id="password-current"
                      placeholder="Your current password"
                      v-model="userInfo.password_current"
                  />
            </FormRow>
          </FormSection>

          <TextButton @click="setUserData()" text="Change user information"/>
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
import userLogout from "@/api/features/user/user-logout";
import userData from "@/api/features/user/user-data";

import ViewBase from "@/components/views/BaseView";
import SubSection from "@/components/content/SubSection";
import TextButton from "@/components/buttons/TextButton";
import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";
import NotificationSign from "@/components/notifications/NotificationSign";

export default {
  name: "UserView",
  components: {
    NotificationSign,
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
    getUserData() {
      userData.userData.get()
          .then(data => {
            console.log("DATA", data);
            this.userInfo.email_current = data.email;
            this.userInfo.username_current = data.name;
          });
      console.log(this.userInfo);
    },
    setUserData() {
      if (this.userInfo.password_new !== this.userInfo.password_new_repeated) {
        this.$emit("alert", {type: "error", message: "New password and new password repeated didn't match."});
        return;
      }
      userData.userData.set(this.userInfo)
          .then(res => {
            if(!res) {
              this.$emit("alert", {type: "error", message: "User information update failed."});
              return;
            }
            this.$emit("alert", {type: "success", message: "User information update was successfull!"});

            if (this.userInfo.disabled)
              this.logout();
          });
    }
  },
  computed: {
    userInfoComputed() {
      return this.userInfo;
    }
  },
  data() {
    return {
      userInfo: {
        username_current: "",
        username_new: "",
        email_current: "",
        email_new: "",
        password_current: "",
        password_new: "",
        password_new_repeated: "",
        disabled: false,
      }
    }
  },
  mounted() {
    if (this.user().hasLoggedIn())
      this.getUserData();
  }
}
</script>
