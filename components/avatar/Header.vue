<template>
  <div class="header__item header__item-user">
    <AvatarMain
      :src="userImage"
      :isCircle="true"
      :initials="user?.initials"
      size="32"
      :class="avatarClasses"
      @click="handle"
    />

    <ul v-if="isLoggedIn" :class="'list profile__menu popup ' + popupClass">
      <li class="profile__item">
        <NuxtLink class="profile__link icon-block" to="/personal/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25 24.14V5.85999C25 5.38999 24.62 5 24.16 5H5.83002C5.37002 5 5 5.38999 5 5.85999V24.14C5 24.61 5.37002 25 5.83002 25H24.16C24.62 25 25 24.61 25 24.14ZM9.20001 7.73999C10.43 7.73999 11.43 8.77001 11.43 10.04C11.43 11.31 10.43 12.35 9.20001 12.35C7.96001 12.35 6.96002 11.31 6.96002 10.04C6.96002 8.77001 7.96001 7.73999 9.20001 7.73999ZM23.27 16.36L19.34 12.11C19.11 11.86 18.73 11.86 18.5 12.11L13.47 17.56L11.07 14.96C10.82 14.69 10.4 14.69 10.15 14.96L6.72003 18.67V22.52C6.72003 22.9 7.00999 23.22 7.35999 23.22H22.63C22.98 23.22 23.27 22.9 23.27 22.52V16.36Z"
            ></path>
          </svg>
          <span> Мои проекты</span>
        </NuxtLink>
      </li>
      <li class="profile__item">
        <NuxtLink class="profile__link icon-block" to="/personal/articles/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.05511 5.24487H23.9451C24.3951 5.24487 24.7551 5.60487 24.7551 6.05487V23.9449C24.7551 24.3949 24.3951 24.7549 23.9451 24.7549C23.7451 24.7549 23.5552 24.6849 23.4152 24.5549L15.1851 18.2049L6.52515 24.5949C6.16515 24.8649 5.66515 24.7849 5.40515 24.4249C5.29515 24.2749 5.24512 24.1149 5.24512 23.9449V6.05487C5.24512 5.60487 5.60511 5.24487 6.05511 5.24487Z"
            ></path>
          </svg>
          <span>Сохраненные статьи</span>
        </NuxtLink>
      </li>
      <li class="profile__item">
        <ButtonMain
          class="profile__link icon-block link"
          @click.prevent="auth.logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M17.1624 12.2838H19.9124V10.3538C19.9124 10.1538 20.0824 9.98383 20.2924 9.98383C20.3724 9.98383 20.4423 10.0038 20.5023 10.0438L25.3923 12.8638C25.5723 12.9738 25.6323 13.2038 25.5223 13.3838C25.4923 13.4338 25.4423 13.4838 25.3923 13.5138L20.4824 16.3538C20.3024 16.4538 20.0723 16.3938 19.9623 16.2138C19.9323 16.1538 19.9124 16.0938 19.9124 16.0238V14.5138H17.1624C16.9824 14.5138 16.8323 14.3638 16.8323 14.1838V12.6138C16.8323 12.4338 16.9824 12.2838 17.1624 12.2838ZM23.5723 16.6738V22.7838C23.5723 23.2638 23.1823 23.6538 22.7023 23.6538H15.0424V24.6538V25.5238C15.0424 26.1838 14.3523 26.4738 13.7523 26.2938L5.00232 23.5938C4.66232 23.4738 4.42236 23.1538 4.42236 22.7838V4.52383C4.42236 4.04383 4.82236 3.65381 5.29236 3.65381H5.32233H22.7023C23.1823 3.65381 23.5723 4.04383 23.5723 4.52383V9.90381L21.8123 8.92383V5.43381H9.44232L14.5123 7.03381C14.8423 7.18381 15.0323 7.49383 15.0323 7.83383L15.0424 21.8738H21.8123V17.6638L23.5723 16.6738Z"
            ></path>
          </svg>
          <span>Выйти</span>
        </ButtonMain>
      </li>
    </ul>
    <PopupMain ref="popupAuth">
      <FormAuth />
    </PopupMain>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore();
const { user, isLoggedIn } = storeToRefs(auth);

const popupClass = ref('');
const popupAuth = ref(null);

const userClassesAndImage = computed(() => {
  if (!isLoggedIn.value) {
    return {
      classes: 'logout',
      imageSrc: '/images/icons/icon-profile-union.svg',
    };
  } else {
    return {
      classes: '',
      imageSrc: user.value?.avatar.small || '',
    };
  }
});

const avatarClasses = computed(() => userClassesAndImage.value.classes);
const userImage = computed(() => userClassesAndImage.value.imageSrc);

const togglePopupClass = () => {
  popupClass.value = popupClass.value === 'active' ? '' : 'active';
};

const handle = () => {
  if (!isLoggedIn.value) {
    popupAuth.value?.open();
  } else {
    togglePopupClass();
  }
};
</script>
