import React, { FC } from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Avatar, Box, Image, Text } from 'react-native-magnus';

interface SportProps {
  name: string;
  img: ImageSourcePropType;
  selectedSport: string;
  onSelect: (name: string) => void;
}

const Sport: FC<SportProps> = ({ name, img, selectedSport, onSelect }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onSelect(name)}>
    <Box alignItems="center">
      <Avatar
        p={10}
        size={100}
        shadow="sm"
        bg={selectedSport === name ? 'crimson' : 'gray400'}
      >
        <Image w="100%" h="100%" resizeMode="center" source={img} />
      </Avatar>

      <Text mt="xs" fontWeight="bold">
        {name}
      </Text>
    </Box>
  </TouchableOpacity>
);

export default Sport;
