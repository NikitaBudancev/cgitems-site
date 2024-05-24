import type { RequestOptions } from '~/types';
interface FetchOptions {
  options?: RequestOptions;
  isDefaultApiPath?: boolean;
  isAuth?: boolean;
}

export async function useFetchData<T>(
  path: string,
  { options = {}, isDefaultApiPath = true, isAuth = false }: FetchOptions = {},
) {
  const config = useRuntimeConfig();
  const headers: Record<string, string> = { accept: 'application/json' };

  let apiUrl = path;
  if (isDefaultApiPath) {
    apiUrl = `${config.public.apiHost}${config.public.apiPath}${path}`;
  }

  if (isAuth) {
    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
      headers['X-XSRF-TOKEN'] = token.value;
    }

    if (process.server) {
      headers['referer'] = config.public.host;
      Object.assign(headers, useRequestHeaders(['cookie']));
    } else {
      Object.assign(headers, options.headers || {});
    }
  }

  const response = await $fetch<T>(apiUrl, {
    ...options,
    headers,
    ...(isAuth ? { credentials: 'include' } : {}),
  });

  return { ...response, fetchedAt: new Date() };
}
