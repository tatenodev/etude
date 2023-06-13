type Identity = {
  connection: string;
  user_id: string;
  provider: string;
  isSocial: boolean;
  access_token?: string;
  access_token_secret?: string;
  refresh_token?: string;
};

type ProfileData = {
  email: string;
  email_verified: boolean;
  name: string;
  username: string;
  given_name: string;
  phone_number: string;
  phone_verified: boolean;
  family_name: string;
};

export type CreateUserResponse = {
  user_id: string;
  email: string;
  email_verified: boolean;
  username: string;
  phone_number: string;
  phone_verified: boolean;
  created_at: string;
  updated_at: string;
  identities: Identity[];
  profileData: ProfileData;
  app_metadata: object;
  user_metadata: object;
  picture: string;
  nickname: string;
  multifactor: string[];
  last_ip: string;
  last_login: number;
  logins_count: number;
  blocked: boolean;
  given_name: string;
  family_name: string;
};

export type CreateUserRequest = {
  email: string;
  phone_number?: string;
  user_metadata?: object;
  blocked?: boolean;
  email_verified?: boolean;
  phone_verified?: boolean;
  app_metadata?: object;
  given_name?: string;
  family_name?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  user_id?: string;
  connection?: string;
  password?: string;
  verify_email?: boolean;
  username?: string;
};
