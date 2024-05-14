<template>
  <div class="auth">
    <FormVerification />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['unverified'],
});
</script>
