// Плагин
export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');

  if (!auth.isLoggedIn && !!token.value) {
    await auth.fetchUser();
  }
});
