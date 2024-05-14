<template>
  <component
    :is="props.href ? LinkMain : ButtonMain"
    :style="{ backgroundColor: props.bgColor }"
    :title="props.fullName"
    :class="[
      'avatar',
      { 'avatar-circle': props.isCircle },
      props.size && `avatar-rounded-${props.size}`,
      props.rounded && `avatar-rounded-${props.rounded}`,
    ]"
  >
    <span
      v-if="props.src"
      class="avatar__image"
      :style="{ backgroundImage: `url('${props.src}')` }"
    ></span>
    <span v-else class="avatar__initials">
      {{ initials }}
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  fullName: {
    type: String,
    default: '',
  },
  initials: {
    type: String,
    default: '',
  },
  bgColor: {
    type: String,
    default: '',
  },
  isCircle: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  rounded: {
    type: String,
    default: '',
  },
});

const LinkMain = defineNuxtLink({});
const ButtonMain = resolveComponent('ButtonMain');
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #414f62;
  padding: 0;
  overflow: hidden;

  &__image {
    width: inherit;
    height: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &-circle {
    border-radius: 50%;

    .avatar__image {
      border-radius: 50%;
    }
  }

  &.logout {
    .avatar__image {
      width: 20px;
      background-size: contain;
    }
  }

  &__initials {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  &-size {
    &-32 {
      width: 32px;
      height: 32px;
    }

    &-full {
      width: 100%;
      height: auto;
    }
  }
}
</style>
