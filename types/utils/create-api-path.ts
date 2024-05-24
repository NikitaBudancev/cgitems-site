export default (basePath: string, params = {}) => {
  const query = new URLSearchParams(params).toString();

  return `${basePath}${query ? '?' + query : ''}`;
};
