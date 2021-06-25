import React, { FC } from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Avatar, Box, Image, Text } from 'react-native-magnus';

interface GameProps {
  league: string;
  country: string;
  leagueLogo?: ImageSourcePropType;
  gameLogo?: ImageSourcePropType;
  team1: {
    name: string;
    goals: number;
    logo?: ImageSourcePropType;
  };
  team2: {
    name: string;
    goals: number;
  };
}

const Game: FC<GameProps> = ({
  league,
  leagueLogo,
  gameLogo,
  team1,
  team2,
  country,
}) => (
  <Box>
    <Box row alignItems="center">
      {leagueLogo && (
        <Image w={30} h={30} resizeMode="contain" source={leagueLogo} />
      )}

      <Box ml="sm">
        <Text fontWeight="bold" fontSize="2xl">
          {league}
        </Text>
        <Text fontSize="lg">{country}</Text>
      </Box>
    </Box>

    <Box mt="xs" row h={80} bg="gray400" rounded="xl" alignItems="center">
      <Box mx="md" alignItems="center" row>
        {gameLogo && (
          <Image w={60} h={60} resizeMode="contain" source={gameLogo} />
        )}
      </Box>

      <Box flex={1} alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {team1.name}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          {team1.goals || 0}
        </Text>
      </Box>

      <Text fontWeight="bold" fontSize="lg">
        -
      </Text>

      <Box flex={1} alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {team2.name}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          {team2.goals || 0}
        </Text>
      </Box>

      <TouchableOpacity activeOpacity={0.7}>
        <Box
          p="lg"
          h="100%"
          bg="gray600"
          alignItems="center"
          justifyContent="center"
          roundedTopRight="xl"
          roundedBottomRight="xl"
        >
          <Text fontWeight="bold" color="white">
            Ver
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  </Box>
);

export default Game;
