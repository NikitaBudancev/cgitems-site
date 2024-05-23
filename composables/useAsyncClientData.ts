export async function useAsyncClientData<T>(fetcher: () => Promise<T>) {
  const data: Ref<T | null> = ref(null);
  const pending = ref(true);
  const error: Ref<{ message?: string; data?: any } | null> = ref(null);

  try {
    data.value = await fetcher();
  } catch (err: any) {
    error.value = {
      message: err.message,
      data: err.data,
    };
  } finally {
    pending.value = false;
  }

  return { data, pending, error };
}
