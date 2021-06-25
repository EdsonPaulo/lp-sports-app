import React, { FC } from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Avatar, Box, Image, Text } from 'react-native-magnus';
import { ESports } from '../../constants/enums';

interface SportProps {
  name: ESports;
  img: ImageSourcePropType;
  selectedSport: string;
  onSelect: (name: ESports) => void;
}

const Sport: FC<SportProps> = ({ name, img, selectedSport, onSelect }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onSelect(name)}>
    <Box
      w="100%"
      h="100%"
      rounded="xl"
      alignItems="center"
      justifyContent="center"
      bg={selectedSport === name ? 'crimson' : 'gray400'}
    >
      <Avatar size={50}>
        <Image w="100%" h="100%" resizeMode="center" source={img} />
      </Avatar>

      <Text
        mt="xs"
        fontSize="sm"
        color={selectedSport === name ? 'white' : 'gray900'}
      >
        {name}
      </Text>
    </Box>
  </TouchableOpacity>
);

export default Sport;
