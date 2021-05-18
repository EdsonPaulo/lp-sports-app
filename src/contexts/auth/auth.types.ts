import {
  IUser,
  SignInPayload,
  SignUpPayload,
} from '../../typescript/interfaces';

export interface AuthContextProps {
  user: IUser | null;
  token: string;
  isLogged: boolean;
  isLoading: boolean;

  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
  signOut: () => Promise<void>;
  retrieveToken: () => Promise<void>;
}
