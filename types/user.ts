export interface User {
  id: Number;
  name: String;
  email: String;
  verified: String;
  info: {
    artstation: String;
    avatar: String;
    behance: String;
    facebook: String;
    vk: String;
  };
}
