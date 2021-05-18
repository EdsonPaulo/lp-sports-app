import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ROUTES from '../../constants/routes';
import { WelcomeScreen } from '../../screens';

import TabsRoutes from './tabs-routes';

const MainRoutes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mainTabs"
        component={TabsRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={{ title: ROUTES.WELCOME }}
      />
    </Stack.Navigator>
  );
};

export default MainRoutes;
