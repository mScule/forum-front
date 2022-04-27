<template>
  <div style="width: 100%" :class="bannerState">
    <NotificationSign :type="type" :message="message"/>
  </div>
</template>

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
      bannerState: "notification-banner-fadein",
    }
  },
  mounted() {
    setTimeout(() => this.bannerState = "notification-banner-fadeout", timeout - 200);
    setTimeout(() => this.$emit("close-notification-alert"), timeout);
  }
}
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: calc(5em + var(--border-width));
  width: 100%;
  z-index: 2;
}
.notification-banner-fadein {
  animation-name: fadein;
  animation-duration: 200ms;
  animation-timing-function: ease-out;
}

.notification-banner-fadeout {
  animation-name: fadeout;
  animation-duration: 200ms;
  animation-timing-function: ease-in;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(calc(-4.8em - var(--border-width)));
  }
  to {
    opacity: 1;
    transform: translateY(calc(-5em - var(--border-width)));
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
    transform: translateY(calc(-5em - var(--border-width)));
  }
  to {
    opacity: 0;
    transform: translateY(calc(-5.2em - var(--border-width)));
  }
}
</style>
