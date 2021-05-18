import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { WelcomeScreen, LoginScreen, RegisterScreen } from '../../../screens';

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
