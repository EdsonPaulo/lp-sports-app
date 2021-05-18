import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'styled-components';
import { v4 } from 'uuid';
import { Feather } from '@expo/vector-icons';

import { Box, Text } from '../styled-components';
import ROUTES from '../../constants/routes';
import { TabBarContainer, TabOption } from './styles';

const getIconNameForRoute = (routeName: string) => {
  if (routeName === ROUTES.HOME) return 'home-outline';
  if (routeName === ROUTES.WELCOME) return 'person-outline';
  return '';
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {
    colors,
    fonts,
    metrics: { iconSize },
  } = useTheme();

  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel?.toString() || options.title;
        const isFocused = state.index === index;
        const icon = getIconNameForRoute(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabOption key={v4()} onPress={onPress}>
            {isFocused ? (
              <>
                <Text fontSize={fonts.size.md}>{label}</Text>
                <Box width="4px" height="4px" backgroundColor={colors.accent} />
              </>
            ) : (
              <Feather
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={icon as any}
                size={iconSize.md}
                color={isFocused ? colors.primary : colors.grayDark}
              />
            )}
          </TabOption>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
