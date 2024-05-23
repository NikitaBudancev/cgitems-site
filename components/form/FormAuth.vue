<template>
  <form class="auth-form" name="form_auth" @submit.prevent="handleLogin">
    <div class="auth__title">Вход</div>

    <div class="authform-formgroup-container">
      <div class="bx-authform-label-container">Email</div>
      <div class="bx-authform-input">
        <input
          v-model="form.email"
          class="input input-dark"
          type="email"
          name="USER_LOGIN"
          maxlength="255"
        />
      </div>
    </div>

    <div class="authform-formgroup-container">
      <div class="bx-authform-label-container">Пароль</div>
      <div class="bx-authform-input authform-input-pass">
        <input
          v-model="form.password"
          class="input input-dark input-password"
          :type="passwordType"
          name="USER_PASSWORD"
          autocomplete="on"
          maxlength="255"
        />
        <button class="btn-password" type="button" @click="togglePassword">
          <svg
            v-if="passwordType === 'text'"
            class="pass-btn-icon pass-svg-visible"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9944 4.7999C16.9293 4.7999 21.1475 7.78748 22.8002 11.9999C21.1475 16.2123 16.9293 19.1999 11.9944 19.1999C7.05962 19.1999 2.84129 16.2123 1.2002 11.9999C2.84129 7.78748 7.05962 4.7999 11.9944 4.7999ZM11.9944 9.16112C13.5431 9.16112 14.7796 10.3974 14.7796 11.9312C14.7796 12.183 14.745 12.4348 14.6872 12.6752C14.456 12.1372 13.936 11.7709 13.3235 11.7709C12.5145 11.7709 11.8442 12.4234 11.8442 13.2247C11.8442 13.8428 12.2256 14.3694 12.7687 14.5754C12.526 14.6556 12.2603 14.6899 11.9944 14.6899C10.4574 14.6899 9.20917 13.4536 9.20917 11.9312C9.20917 10.3974 10.4574 9.16112 11.9944 9.16112ZM11.9944 6.88315C14.8143 6.88315 17.091 9.1382 17.091 11.9312C17.091 14.7128 14.8143 16.9678 11.9944 16.9678C9.1861 16.9678 6.89778 14.7128 6.89778 11.9312C6.89778 9.1382 9.1861 6.88315 11.9944 6.88315Z"
              fill="white"
            ></path>
          </svg>
          <svg
            v-if="passwordType === 'password'"
            class="pass-btn-icon pass-svg-hide"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.44995 9.21997L1 10.89"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
            <path
              d="M7.51929 11.8L5.5293 14.6901"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
            <path
              d="M17.9199 14.6901L15.9199 11.8"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
            <path
              d="M22.45 10.89L19 9.21997"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
            <path
              d="M11.7197 12.74V16.09"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
            <path
              d="M19.7694 7C19.0494 10.18 15.7195 12.58 11.7195 12.58C7.73948 12.58 4.40945 10.18 3.68945 7.01999"
              stroke="#FEFEFE"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="isErrorLogin"
      class="error_new_block"
      style="margin-bottom: -50px; min-height: 50px; height: auto"
    >
      {{ errorLogin?.message }}
      <br />
    </div>

    <div
      class="authform-formgroup-container authform-formgroup-container-submit"
    >
      <input
        type="submit"
        class="button auth__button button-default button-default-center border-radius-5"
        name="AUTH_ACTION"
        value="Войти"
      />
    </div>

    <div class="bx-authform-link-container auth__link-box">
      <a
        class="text-bold"
        href="/personal/auth/forgot-password/"
        rel="nofollow"
      >
        Забыли пароль?
      </a>
    </div>
    <div class="bx-authform-link-container auth__link-box auth__link-box-last">
      <span class="text-violet">Новый пользователь?</span>
      <a
        class="text-bold text-violet"
        href="/personal/auth/registration/"
        rel="nofollow"
      >
        Зарегистрироваться
      </a>
    </div>
  </form>
</template>

<script setup lang="ts">
interface ErrorLogin {
  success: boolean;
  message: string;
}

const form = ref({
  email: '',
  password: '',
});

const errorLogin = ref<ErrorLogin>();
const isErrorLogin = computed(() => errorLogin.value?.success === false);

const passwordType = ref('password');

const togglePassword = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
};

const auth = useAuthStore();

const handleLogin = async () => {
  try {
    await auth.login(form.value);
  } catch (error) {
    errorLogin.value = { success: false, message: 'Ошибка входа' };
  }
};
</script>
