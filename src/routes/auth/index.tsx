import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ROUTES from '../../constants/routes';
import {
  WelcomeScreen,
  SignInScreen,
  SignUpScreen,
  SelectSportScreen,
  NotificationsScreen,
  PaymentScreen,
} from '../../screens';

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
      <AuthStack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
      <AuthStack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
      <AuthStack.Screen
        name={ROUTES.SELECT_SPORT}
        component={SelectSportScreen}
      />
      <AuthStack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationsScreen}
      />
      <AuthStack.Screen name={ROUTES.PAYMENT} component={PaymentScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
