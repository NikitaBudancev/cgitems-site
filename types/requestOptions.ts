import type { method } from './methodsHttp';

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: method;
  body?: any;
}
