import type { RequestOptions } from '~/types/requestOptions';

export function useAuthFetch<T>(
  path: string | (() => string),
  options: RequestOptions = {},
  optionsAsyncData = {},
) {
  const token = useCookie('XSRF-TOKEN');
  const config = useRuntimeConfig();

  let headers: Record<string, string> = {
    accept: 'application/json',
    referer: config.public.host,
  };

  const apiUrl = `${config.public.apiHost}${config.public.apiPath}${path}`;

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie']),
    };
  } else {
    headers = {
      ...headers,
      ...(options.headers || {}),
    };
  }

  return useAsyncData<T>(
    () =>
      $fetch(apiUrl, {
        ...options,
        credentials: 'include',
        headers,
      }),
    {
      ...optionsAsyncData,
    },
  );
}
