import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Header } from '../../components';
import ROUTES from '../../constants/routes';
import { WelcomeScreen, SignInScreen, SignUpScreen } from '../../screens';

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}
    >
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        name={ROUTES.SIGN_IN}
        component={SignInScreen}
        options={{ title: ROUTES.SIGN_IN }}
      />
      <AuthStack.Screen
        name={ROUTES.SIGN_UP}
        component={SignUpScreen}
        options={{ title: ROUTES.SIGN_UP }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
