interface RequestOptions {
  headers?: Record<string, string>;
  // Другие свойства options...
}

export function useAuthFetch(
  path: string | (() => string),
  options: RequestOptions = {}, // Задаем тип для options
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

  return useAsyncData(
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
