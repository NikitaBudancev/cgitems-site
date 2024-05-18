import { type User } from '~/types/user';
import { type Credentials } from '~/types/credentials';
import { ROLE_GUEST } from '~/constants/roles';
import { HOME_PATH, PERSONAL_PATH, VERIFICATION_PATH } from '~/constants/paths';
import apiPoints from '~/constants/apiPoints';

export const useAuthStore = defineStore('auth', () => {
  const config = useRuntimeConfig();
  const user = ref<User | null>(null);
  const role = ref<string>(ROLE_GUEST);

  const isLoggedIn = computed(() => !!user.value);

  const fetchSanctum = async () => {
    const urlSanctum = config.public.apiHost + apiPoints.sanctum;

    await useFetch(urlSanctum, {
      credentials: 'include',
      watch: false,
    });
  };

  const fetchUser = async () => {
    try {
      const userCookie = useCookie('user-data', {
        expires: new Date(new Date().getTime() + 10 * 60 * 1000),
      });

      if (userCookie.value) {
        user.value = userCookie.value as User;
        role.value = userCookie.value.role;

        return;
      }

      const response = await useAuthFetch(apiPoints.me);

      if (response.error.value) {
        console.error('Ошибка при запросе пользователя:', response.error.value);
        throw new Error(
          response.error.value.data.message ||
            'Ошибка при запросе данных пользователя',
        );
      }

      if (response.data.value?.success) {
        user.value = response.data.value.result as User;
        role.value = response.data.value.result.role;

        userCookie.value = user.value;
      }
    } catch (error) {
      console.error('Ошибка в fetchUser:', error);
    }
  };

  const handleAuthentication = async (
    apiPath: string,
    credentials: Credentials,
    redirectPath: string,
  ) => {
    try {
      await fetchSanctum();

      const response = await useAuthFetch(apiPath, {
        method: 'POST',
        body: credentials,
      });

      if (response.error.value?.data) {
        return response.error.value.data;
      }

      if (response.data.value?.success) {
        user.value = response.data.value?.result as User;
        role.value = user.value.role;

        if (redirectPath) {
          navigateTo(redirectPath);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (credentials: Credentials) => {
    await handleAuthentication(
      apiPoints.register,
      credentials,
      VERIFICATION_PATH,
    );
  };

  const login = async (credentials: Credentials) => {
    await handleAuthentication(apiPoints.login, credentials, PERSONAL_PATH);
  };

  const logout = async () => {
    const route = useRoute();
    const isPersonalPath = route.path.startsWith(PERSONAL_PATH);

    if (isPersonalPath) {
      navigateTo(HOME_PATH);
    }

    user.value = null;
    role.value = ROLE_GUEST;

    try {
      const response = await useAuthFetch(apiPoints.logout, { method: 'POST' });
      if (response.data.value?.success) {
        const token = useCookie('XSRF-TOKEN');
        const userCookie = useCookie('user-data');

        userCookie.value = null;
        token.value = null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { register, login, isLoggedIn, fetchUser, user, logout, role };
});
