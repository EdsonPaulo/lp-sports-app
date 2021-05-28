import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Box, Image, Text } from 'react-native-magnus';

import { SafeArea } from '../../components';
import ROUTES from '../../constants/routes';
import { LandingImg } from '../../assets/images';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeArea bg="white" p="lg">
      <Image
        resizeMode="contain"
        style={{ width: '100%', flex: 1 }}
        source={LandingImg}
      />

      <Box p="2xl" pb="none" mt="xl" justifyContent="space-between">
        <Text fontSize="xl">Descubra tudo sobre desporto</Text>
        <Text textAlign="justify" fontSize="lg">
          Tenha o mundo desportivo em suas mãos, acompanhe e receba alertas dos
          acontecimentos ou eventos das tuas modalidades favoritas.
        </Text>

        <Box flexDir="row" justifyContent="center">
          <Button
            mr="sm"
            bg="crimson"
            rounded="lg"
            onPress={() => navigate(ROUTES.SIGN_IN)}
          >
            Iniciar Sessão
          </Button>
          <Button
            bg="crimson"
            rounded="lg"
            onPress={() => navigate(ROUTES.SIGN_UP)}
          >
            Criar conta
          </Button>
        </Box>
      </Box>
    </SafeArea>
  );
};

export default Welcome;
