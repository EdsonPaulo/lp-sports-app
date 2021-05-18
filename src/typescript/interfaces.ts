export interface IUser {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface SignInPayload {
  phone: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  phone: string;
  password: string;
  email: string;
}
