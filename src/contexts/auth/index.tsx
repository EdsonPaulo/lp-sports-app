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
import {
  IUser,
  SignInPayload,
  SignUpPayload,
} from '../../typescript/interfaces';
import { AuthContextProps } from './auth.types';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider: FC = props => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setISLoading] = useState(false);

  const signIn = useCallback(
    async ({ phone, password }: SignInPayload) => {
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
        }, 300);
      } catch (error) {
        Alert.alert('Ocorreu um erro ao iniciar sessão!');
      } finally {
        setISLoading(false);
      }
    },
    [isLoading, token, user],
  );

  const signUp = useCallback(
    async ({ phone, password, email, name }: SignUpPayload) => {
      if (isLoading) return;
      // TODO: auth request to server
      console.log(phone, password, email, name);
      const newUser: IUser = {
        phone,
        email,
        name,
        address: mockUser.address,
      };
      setISLoading(true);
      try {
        setTimeout(async () => {
          await AsyncStorage.multiSet([
            [constants.USER_KEY, JSON.stringify(newUser)],
            [constants.TOKEN_KEY, token],
          ]);
          setUser(newUser);
          setToken(mockToken);
          // setIsLogged(false);
        }, 2000);
      } catch (error) {
        Alert.alert('Ocorreu um erro ao fazer cadastro!');
      } finally {
        setISLoading(false);
      }
    },
    [isLoading, token],
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
      signUp,
      signOut,
      retrieveToken,
    }),
    [isLoading, isLogged, retrieveToken, signIn, signUp, token, user],
  );

  return <AuthContext.Provider value={memoizedValue} {...props} />;
};

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;
