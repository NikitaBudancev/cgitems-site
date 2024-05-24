import type { Roles } from '~/types/enums';
import type { Avatar } from './avatar';
import type { UserInfo } from './user-info';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  initials: string;
  email: string;
  verified: boolean;
  avatar: Avatar;
  role: Roles;
  info: UserInfo;
}
