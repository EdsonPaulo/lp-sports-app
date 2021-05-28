import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Icon as IconMagnus, Text } from 'react-native-magnus';

const Header: FC<StackHeaderProps> = ({ ...restProps }) => {
  const { goBack } = useNavigation();
  const {
    scene: {
      descriptor: {
        options: { title },
      },
    },
  } = restProps;

  return (
    <Box
      p="lg"
      mt="xl"
      flexDir="row"
      rounded="xs"
      borderRightWidth={5}
      borderRightColor="gray700"
      alignItems="center"
      justifyContent="space-between"
    >
      <TouchableOpacity activeOpacity={0.6} onPress={goBack}>
        <IconMagnus
          name="chevron-back"
          fontFamily="Ionicons"
          color="gray900"
          fontSize="4xl"
        />
      </TouchableOpacity>

      <Text mr="md" fontSize="5xl">
        {title}
      </Text>
    </Box>
  );
};

export default Header;
