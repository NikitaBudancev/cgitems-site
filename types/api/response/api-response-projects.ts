import type { PaginationMeta } from '../../paginationMeta';
import type { ApiResponse } from './api-response';

export interface apiResponseProjects
  extends ApiResponse<{
    projects: Project[];
    meta: PaginationMeta;
  }> {}
