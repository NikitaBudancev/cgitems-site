import { Paths } from '~/constants/paths';
import { Roles } from '~/constants/roles';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn || auth.role !== Roles.student) {
    return navigateTo(Paths.Auth);
  }
});
