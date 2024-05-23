import type { PaginationMeta } from '../paginationMeta';
import type { ApiResponse } from './apiResponse';

export interface apiResponseProjects
  extends ApiResponse<{
    projects: Project[];
    meta: PaginationMeta;
  }> {}
