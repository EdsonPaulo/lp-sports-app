import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ROUTES from '../../constants/routes';
import { WelcomeScreen, SignInScreen, SignUpScreen } from '../../screens';

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
      <AuthStack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
      <AuthStack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
