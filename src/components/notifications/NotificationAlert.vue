<!--
  Notification that flashes on at the top and fades out.

  Attributes
    type:    Type of the notification. Has 4, "information", "success", "warning", and "error".
             Defaults to "information".
    message: The message that will be shown.
-->

<script>
import NotificationSign from "@/components/notifications/NotificationSign";

const timeout = 2000;

export default {
  name: "NotificationAlert",
  components: {NotificationSign},
  props: {
    type: String,
    message: String,
  },
  data() {
    return {
      animationState: "notification-alert-fadein",
    }
  },
  mounted() {
    setTimeout(() => this.animationState = "notification-alert-fadeout", timeout);
    setTimeout(() => this.$emit("close-notification-alert"), timeout + 200);
  }
}
</script>

<template>
  <div :class="animationState">
    <NotificationSign :type="type" :message="message"/>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: var(--margin-medium);
  right: var(--margin-medium);
  margin-top: calc(5em + var(--border-width));
  z-index: 2;
}

.notification-alert-fadein {
  animation-name: fadein;
  animation-duration: 200ms;
  animation-timing-function: linear;
}

.notification-alert-fadeout {
  animation-name: fadeout;
  animation-duration: 200ms;
  animation-timing-function: linear;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(calc(-4.8em - var(--border-width)));
    left: 1em;
    right: 1em;
  }
  to {
    opacity: 1;
    transform: translateY(calc(-5em - var(--border-width)));
    left: 0;
    right: 0;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
    transform: translateY(calc(-5em - var(--border-width)));
    left: 0;
    right: 0;
  }
  to {
    opacity: 0;
    transform: translateY(calc(-5.2em - var(--border-width)));
    left: 1em;
    right: 1em;
  }
}
</style>
