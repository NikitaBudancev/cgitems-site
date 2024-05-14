<template>
  <form
    class="auth-form"
    id="modal_auth"
    name="form_auth"
    @submit.prevent="handleLogin"
  >
    <div class="auth__title">Вход</div>

    <div class="authform-formgroup-container">
      <div class="bx-authform-label-container">Код верификации</div>
      <div class="bx-authform-input">
        <input
          class="input input-dark"
          type="email"
          name="USER_LOGIN"
          maxlength="255"
          v-model="form.verification"
        />
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
const form = ref({
  verification: '',
});

const verification = await useAuthFetch('/auth/verification/notify', {
  method: 'post',
});
</script>
