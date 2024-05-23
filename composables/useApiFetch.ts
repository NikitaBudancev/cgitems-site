import type { RequestOptions } from "~/types/requestOptions";

interface AsyncDataOptions {
  transform?: (input: any) => any;
  getCachedData?: (key: string) => any;
  lazy?: boolean;
}

export function useApiFetch<T>(
  path: string | (() => string),
  options: RequestOptions = {},
  asyncDataOptions: AsyncDataOptions = {},
) {
  const nuxtApp = useNuxtApp();
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.apiHost}${config.public.apiPath}${
    typeof path === 'function' ? path() : path
  }`;
  const headers: Record<string, string> = { accept: 'application/json' };

  const key = apiUrl;

  return useAsyncData<T>(
    key,
    async () => {
      const response = await $fetch(apiUrl, {
        ...options,
        headers: { ...headers, ...options.headers },
      });
      return { ...(response as any), fetchedAt: new Date() };
    },
    {
      ...asyncDataOptions,
      transform: (input) => ({
        ...input,
        fetchedAt: new Date(),
        ...asyncDataOptions.transform?.(input),
      }),
      getCachedData(key) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];

        if (!data) {
          return;
        }

        const expirationDate = new Date(data.fetchedAt);
        const minute = 60 * 1000;
        expirationDate.setTime(expirationDate.getTime() + minute * 10);

        const isExpired = expirationDate.getTime() < Date.now();

        if (isExpired) {
          return;
        }

        return data;
      },
    },
  );
}
