// Плагин
export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');


  if (!auth.isLoggedIn && !!token.value) {
    console.log('____PLUGIN')
    await auth.fetchUser();
  }
});
