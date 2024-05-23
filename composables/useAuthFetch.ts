import type { RequestOptions } from '~/types/requestOptions';

export function useAuthFetch<T>(
  path: string | (() => string),
  options: RequestOptions = {},
  isDefaultApiPath: boolean = true,
) {
  const token = useCookie('XSRF-TOKEN');
  const config = useRuntimeConfig();

  let headers: Record<string, string> = {
    accept: 'application/json',
    referer: config.public.host,
  };

  const apiUrl = isDefaultApiPath
    ? `${config.public.apiHost}${config.public.apiPath}${path}`
    : path;

    console.log(apiUrl);

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

  return $fetch<T>(apiUrl, {
    ...options,
    credentials: 'include',
    headers,
  });
}
