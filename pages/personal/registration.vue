<template>
  <div class="auth">
    <div class="modal registration-modal">
      <div class="modal__inner">
        <FormRegistration />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['guest'],
});
</script>
