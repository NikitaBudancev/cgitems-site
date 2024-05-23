export default {
  me: '/me',
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
  sanctum: '/sanctum/csrf-cookie',

  stages: '/stages',

  project: (slug: string): string => createApiPath(`/projects/${slug}`),
  projects: (params: object = {}): string =>
    createApiPath('/projects/', params),

  meProject: (slug: string): string => createApiPath(`/me/projects/${slug}`),
  meProjects: (params: object = {}): string =>
    createApiPath('/me/projects/', params),

  mediaProject: (id?: number): string =>
    id
      ? createApiPath(`/me/projects/media`)
      : createApiPath(`/me/projects/media/${id}`),

  article: (slug: string): string => createApiPath(`/artiscles/${slug}`),
};
