import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Box, Image, Text } from 'react-native-magnus';

import { SportProps } from '../select-sport.types';

const Sport: FC<SportProps> = ({ name, img, selectedSport, onSelect }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onSelect(name)}>
    <Box alignItems="center">
      <Avatar
        p={10}
        size={100}
        shadow="lg"
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
