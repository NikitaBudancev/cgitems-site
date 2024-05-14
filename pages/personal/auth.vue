<template>
  <div class="auth">
    <FormAuth />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['guest'],
});
</script>
