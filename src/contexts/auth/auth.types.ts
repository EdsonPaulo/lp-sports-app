import { IUser } from '../../typescript/interfaces';

export interface AuthContextProps {
  user: IUser | null;
  token: string;
  isLogged: boolean;
  isLoading: boolean;

  signIn: (phone: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  retrieveToken: () => Promise<void>;
}
