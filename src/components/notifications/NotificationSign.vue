<!--
  Static notification.

  Attributes
    type:    Type of the notification. Has 4, "information", "success", "warning", and "error".
             Defaults to "information".
    message: The message that will be shown.
-->

<script>
import BaseSign from "@/components/notifications/BaseSign";

export default {
  name: "NotificationSign",
  components: {
    BaseSign
  },
  props: {
    message: String,
    type: {type: String, default: "information"}
  }
}
</script>

<template>
  <BaseSign
      v-if="type === 'success'"
      class="success"
      heading="Success"
      :message="message"
      icon-name="success"
  />
  <BaseSign
      v-else-if="type === 'warning'"
      class="warning"
      heading="Be aware"
      :message="message"
      icon-name="warning"
      icon-color="--warning-text-color"
  />
  <BaseSign
      v-else-if="type === 'error'"
      class="error"
      heading="Error"
      :message="message"
      icon-name="error"
  />
  <BaseSign
      v-else
      class="information"
      heading="Note"
      :message="message"
      icon-name="information"
  />
</template>

<style scoped>
.information {
  background-color: var(--information-background-color);
  --border-color: var(--information-text-color);
  --text-heading-color: var(--information-text-color);
  --text-paragraph-color: var(--information-text-color);
}

.success {
  background-color: var(--success-background-color);
  --border-color: var(--success-text-color);
  --text-heading-color: var(--success-text-color);
  --text-paragraph-color: var(--success-text-color);
}

.warning {
  background-color: var(--warning-background-color);
  --border-color: var(--warning-text-color);
  --text-paragraph-color: var(--warning-text-color);
  --text-heading-color: var(--warning-text-color);
}

.error {
  background-color: var(--error-background-color);
  --border-color: var(--error-text-color);
  --text-paragraph-color: var(--error-text-color);
  --text-heading-color: var(--error-text-color);
}
</style>
