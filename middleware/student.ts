import { Paths, Roles } from '~/types';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn || auth.role !== Roles.student) {
    return navigateTo(Paths.Auth);
  }
});
