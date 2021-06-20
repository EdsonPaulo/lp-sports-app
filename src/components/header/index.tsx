import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Icon as IconMagnus, Text } from 'react-native-magnus';

const Header: FC<{
  title?: string;
  allowGoBack?: boolean;
}> = ({ title, allowGoBack }) => {
  const { goBack } = useNavigation();

  return (
    <Box
      p="lg"
      flexDir="row"
      rounded="xs"
      alignItems="center"
      justifyContent="space-between"
    >
      {allowGoBack && (
        <TouchableOpacity activeOpacity={0.6} onPress={goBack}>
          <IconMagnus
            name="chevron-back"
            fontFamily="Ionicons"
            color="gray900"
            fontSize="4xl"
          />
        </TouchableOpacity>
      )}

      <Text
        mr="md"
        fontSize="4xl"
        fontWeight="bold"
        borderRightWidth={3}
        borderRightColor="gray700"
      >
        {title}
      </Text>
    </Box>
  );
};

export default Header;
