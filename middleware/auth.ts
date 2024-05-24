import { Paths } from '~/types';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    return navigateTo(Paths.Auth);
  }
});
