import { AUTH_PATH } from '~/constants/paths';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    return navigateTo(AUTH_PATH);
  }
});
