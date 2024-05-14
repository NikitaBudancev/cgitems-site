<template>
  <transition name="modal">
    <div v-if="isOpen" class="modal-backdrop" @click="close">
      <div class="modal-default" @click.stop>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const closeKeydown = (e) => {
  if (isOpen.value && e.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', closeKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', closeKeydown);
});

defineExpose({
  open,
  close,
});
</script>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-default-enter-active,
.modal-default-leave-active {
  transition:
    transform 0.2s,
    opacity 0.2s;
}
.modal-default-enter-from,
.modal-default-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.modal-backdrop {
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.483);
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
