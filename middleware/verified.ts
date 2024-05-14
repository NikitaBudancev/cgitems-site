import { AUTH_PATH, VERIFICATION_PATH } from '~/constants/paths';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) return navigateTo(AUTH_PATH);

  if (!auth.user?.verified) return navigateTo(VERIFICATION_PATH);
});
