<template>
  <component
    :is="isLink ? componentLink : 'button'"
    :title="props.title"
    :to="props.href"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});

const componentLink = resolveComponent('NuxtLink');

const isLink = computed(() => {
  if (props.href) {
    return true;
  } else {
    return false;
  }
});
</script>
