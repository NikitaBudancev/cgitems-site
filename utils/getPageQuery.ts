export default (pageNumber: number) => {
  return pageNumber !== 1 ? `?page=${pageNumber}` : '';
};
