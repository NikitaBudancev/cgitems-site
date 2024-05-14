import { AUTH_PATH } from '~/constants/paths';
import { ROLE_STUDENT } from '~/constants/roles';

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn || auth.role !== ROLE_STUDENT) {
    return navigateTo(AUTH_PATH);
  }
});
