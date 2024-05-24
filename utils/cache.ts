export function initCachedData(key: string, cacheDurationMinutes: number) {
  const nuxtApp = useNuxtApp();
  const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];

  if (!data) {
    return;
  }

  const expirationDate = new Date(data.fetchedAt);
  expirationDate.setTime(
    expirationDate.getTime() + 60 * 1000 * cacheDurationMinutes,
  );

  const isExpired = expirationDate.getTime() < Date.now();

  if (isExpired) {
    return;
  }

  return data;
}

export function transformData(input: any) {
  return {
    ...input,
    fetchedAt: new Date(),
  };
}

export function clearCache(key: string) {
  const nuxtApp = useNuxtApp();
  if (nuxtApp.payload.data[key]) {
    delete nuxtApp.payload.data[key];
  }
  if (nuxtApp.static.data[key]) {
    delete nuxtApp.static.data[key];
  }
}
