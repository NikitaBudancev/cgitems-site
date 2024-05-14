// Плагин
export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();
    const token = useCookie('XSRF-TOKEN');

    if (!auth.isLoggedIn && !!token.value) {
      console.log('plugin____________');
      await auth.fetchUser(); // Добавлен await
    }

});
