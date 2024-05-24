import type { Roles } from '~/constants/roles';

export interface User {
  id: Number;
  firstName: String;
  lastName: String;
  initials: String;
  email: String;
  verified: String;
  avatar: {
    small: string;
    medium: string;
    larage: string;
  };
  role: Roles;
  info: {
    artstation: String;
    avatar: String;
    behance: String;
    facebook: String;
    vk: String;
  };
}
