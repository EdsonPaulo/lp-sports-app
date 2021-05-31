import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Box, Image, Text } from 'react-native-magnus';

import { SafeArea } from '../../components';
import ROUTES from '../../constants/routes';
import { LandingImg } from '../../assets/images';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeArea bg="white" p="2xl">
      <Image
        resizeMode="contain"
        style={{ width: '100%', flex: 1 }}
        source={LandingImg}
      />

      <Box my="xl" justifyContent="space-between">
        <Text fontSize="6xl" fontWeight="bold">
          Descubra tudo sobre desporto
        </Text>
        <Text mt="sm" fontSize="xl" color="gray700">
          Tenha o desporto em suas mãos, acompanhe e receba alertas dos
          acontecimentos ou eventos das tuas modalidades favoritas.
        </Text>
      </Box>

      <Box flexDir="row">
        <Button
          mr="sm"
          flex={1}
          bg="crimson"
          rounded="lg"
          onPress={() => navigate(ROUTES.SIGN_IN)}
        >
          Iniciar Sessão
        </Button>
        <Button
          flex={1}
          rounded="lg"
          color="crimson"
          bg="white"
          onPress={() => navigate(ROUTES.SIGN_UP)}
        >
          Criar conta
        </Button>
      </Box>
    </SafeArea>
  );
};

export default Welcome;
