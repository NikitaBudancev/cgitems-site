export interface CacheSettings {
  key: string;
  durationMinutes: number;
}

export const cacheConfig: Record<string, CacheSettings> = {
  projects: { key: 'projects', durationMinutes: 10 },
  meProjects: { key: 'me-projects', durationMinutes: 10 },
};
