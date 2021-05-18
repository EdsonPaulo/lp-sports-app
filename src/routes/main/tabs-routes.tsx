import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabBar } from '../../components';
import ROUTES from '../../constants/routes';
import { HomeScreen } from '../../screens';

const TabRoutes = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={ROUTES.HOME}
    >
      <Tabs.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{ tabBarLabel: ROUTES.HOME }}
      />
    </Tabs.Navigator>
  );
};

export default TabRoutes;
