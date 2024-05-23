import { Paths } from '~/constants/paths';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) return navigateTo(Paths.Auth);

  if (auth.user?.verified) return navigateTo(Paths.Personal);
});
