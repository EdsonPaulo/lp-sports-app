/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Alert } from 'react-native';
import constants from '../../constants/constants';

import { mockToken, mockUser } from '../../constants/mocked-data';
import { IUser } from '../../typescript/interfaces';
import { AuthContextProps } from './auth.types';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider: FC = props => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setISLoading] = useState(false);

  const signIn = useCallback(
    async (phone: string, password: string) => {
      if (isLoading) return;
      // TODO: auth request to server
      console.log('Phone: ', phone, 'Password: ', password);
      setISLoading(true);
      try {
        setTimeout(async () => {
          await AsyncStorage.multiSet([
            [constants.USER_KEY, JSON.stringify(user)],
            [constants.TOKEN_KEY, token],
          ]);
          setUser(mockUser);
          setToken(mockToken);
          setIsLogged(true);
        }, 3000);
      } catch (error) {
        Alert.alert('Ocorreu um erro ao iniciar sessão!');
      } finally {
        setISLoading(false);
      }
    },
    [isLoading, token, user],
  );

  const signOut = async () => {
    setISLoading(true);
    try {
      await AsyncStorage.multiRemove([constants.TOKEN_KEY, constants.USER_KEY]);
      setIsLogged(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLogged(false);
      setISLoading(false);
    }
  };

  const retrieveToken = useCallback(async () => {
    setISLoading(true);
    try {
      const loadedToken = await AsyncStorage.getItem(constants.TOKEN_KEY);
      const loadedUser = (await AsyncStorage.getItem(
        constants.USER_KEY,
      )) as IUser | null;

      if (!loadedUser || !loadedToken) {
        await signOut();
        return;
      }
      setUser(loadedUser);
      setToken(loadedToken);
    } catch (e) {
      setIsLogged(false);
    } finally {
      setISLoading(false);
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      user,
      token,
      isLogged,
      isLoading,
      signIn,
      signOut,
      retrieveToken,
    }),
    [isLoading, isLogged, retrieveToken, signIn, token, user],
  );

  return <AuthContext.Provider value={memoizedValue} {...props} />;
};

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;