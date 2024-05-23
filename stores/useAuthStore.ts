import { type User } from '~/types/user';
import { type Credentials } from '~/types/credentials';
import { Roles } from '~/constants/roles';
import { Paths } from '~/constants/paths';
import apiPoints from '~/constants/apiPoints';
import type { ApiResponse } from '~/types/response/apiResponse';

export const useAuthStore = defineStore('auth', () => {
  const config = useRuntimeConfig();
  const user = ref<User | null>(null);
  const role = ref<string>(Roles.guest);

  const isLoggedIn = computed(() => !!user.value);

  const fetchSanctum = async () => {
    const urlSanctum = config.public.apiHost + apiPoints.sanctum;

    await useFetchData<ApiResponse>(urlSanctum, {
      isDefaultApiPath: false,
      isAuth: true,
    });
  };

  const fetchUser = async () => {
    try {
      const { data, error } = await useAsyncData('current-user', () => {
        return useFetchData<ApiResponse<User>>(apiPoints.me, { isAuth: true });
      });

      if (error.value) {
        throw new Error(
          error.value.message || 'Ошибка при запросе данных пользователя',
        );
      }

      const userData = data.value;

      if (userData) {
        user.value = userData.result;
        role.value = userData.result.role;
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

      let { data, error } = await useAsyncClientData(() => {
        return useFetchData<ApiResponse<User>>(apiPath, {
          options: {
            method: 'POST',
            body: credentials,
          },
          isAuth: true,
        });
      });

      if (error.value) {
        throw new Error(
          error.value.message || 'Ошибка при запросе данных пользователя',
        );
      }

      const userData = data.value;

      if (userData) {
        user.value = userData.result;
        role.value = userData.result.role;

        if (redirectPath) {
          navigateTo(redirectPath);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (credentials: Credentials): Promise<void> => {
    try {
      await handleAuthentication(
        apiPoints.register,
        credentials,
        Paths.Verification,
      );
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  const login = async (credentials: Credentials): Promise<void> => {
    try {
      await handleAuthentication(apiPoints.login, credentials, Paths.Personal);
    } catch (error) {
      console.error('Ошибка при аутентификации:', error);
    }
  };

  const logout = async (): Promise<void> => {
    const route = useRoute();
    const isPersonalPath = route.path.startsWith(Paths.Personal);

    if (isPersonalPath) {
      navigateTo(Paths.Home);
    }

    user.value = null;
    role.value = Roles.guest;

    try {
      let { data } = await useAsyncClientData(() => {
        return useFetchData<ApiResponse>(apiPoints.logout, {
          options: {
            method: 'POST',
          },
          isAuth: true,
        });
      });

      if (!data.value?.success) {
        throw new Error('Ошибка при выходе из системы');
      }

      const token = useCookie('XSRF-TOKEN');

      token.value = null;
    } catch (error) {
      console.error('Ошибка при выходе из системы:', error);
    }
  };

  return { register, login, isLoggedIn, fetchUser, user, logout, role };
});
