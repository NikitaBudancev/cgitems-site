export default {
  me: '/me',
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
  sanctum: '/sanctum/csrf-cookie',

  stages: '/stages',

  project: (slug: string) => createApiPath(`/projects/${slug}`),
  projects: (params: object = {}) => createApiPath('/projects/', params),

  meProject: (slug: string) => createApiPath(`/me/projects/${slug}`),
  meProjects: (params: object = {}) => createApiPath('/me/projects/', params),

  mediaProject: (id: number = 0) =>
    id === 0
      ? createApiPath(`/me/projects/media`)
      : createApiPath(`/me/projects/media/${id}`),

  article: (slug: string) => createApiPath(`/artiscles/${slug}`),
};
