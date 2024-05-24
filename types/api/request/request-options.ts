import type { HttpMethod } from '../method';

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: HttpMethod;
  body?: any;
}
