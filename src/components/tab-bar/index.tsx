import { Feather } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Box, Button, Text, useTheme } from 'react-native-magnus';
import { v4 } from 'uuid';

import ROUTES from '../../constants/routes';

const getIconNameForRoute = (routeName: string) => {
  if (routeName === ROUTES.HOME) return 'home';
  if (routeName === ROUTES.WELCOME) return 'person';
  return '';
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {
    theme: { colors, fontSize },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useTheme() as any;

  return (
    <Box
      p="sm"
      h="50px"
      bg="white"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
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
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };

        return (
          <Button
            key={v4()}
            flex={1}
            my="md"
            h="100%"
            rounded="sm"
            flexDir="column"
            bg="transparent"
            alignItems="center"
            justifyContent="center"
            onPress={onPress}
          >
            {isFocused ? (
              <>
                <Text fontSize="lg" color={isFocused ? 'crimson' : 'gray900'}>
                  {label}
                </Text>
                <Box mt="xs" w={8} h={8} bg="crimson" rounded="circle" />
              </>
            ) : (
              <Feather
                name={icon as never}
                size={fontSize.md}
                color={isFocused ? colors.crimson : colors.gray600}
              />
            )}
          </Button>
        );
      })}
    </Box>
  );
};

export default TabBar;
