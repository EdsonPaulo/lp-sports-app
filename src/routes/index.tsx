import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

import colors from '../constants/colors';
import { useAuthContext } from '../contexts/auth';

import AuthNavigation from './auth';
import MainNavigation from './main';

const Routes: React.FC = () => {
  const { isLogged, retrieveToken } = useAuthContext();

  useEffect(() => {
    (async () => retrieveToken())();
  }, [retrieveToken]);

  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={colors.backgroundPrimary} />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <RootStack.Screen name="home" component={MainNavigation} />
        ) : (
          <RootStack.Screen name="auth" component={AuthNavigation} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
