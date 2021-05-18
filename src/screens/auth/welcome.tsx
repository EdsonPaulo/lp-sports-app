import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Image } from 'react-native';

import {
  SafeArea,
  Container,
  H1,
  Text,
  Button,
  RowView,
  Box,
} from '../../components';
import ROUTES from '../../constants/routes';
import { LandingImg } from '../../assets/images';

const Welcome: React.FC = () => {
  const {
    colors,
    metrics: { fontSize },
  } = useTheme();
  const { navigate } = useNavigation();

  return (
    <SafeArea backgroundColor={colors.white}>
      <Container marginVertical="20px">
        <Image
          resizeMode="contain"
          style={{ width: '100%', flex: 1 }}
          source={LandingImg}
        />

        <Container
          marginTop="20px"
          justifyContent="space-between"
          padding="30px"
          paddingBottom="0px"
        >
          <H1 fontSize={fontSize.xl} textAlign="left">
            Descubra tudo sobre desporto
          </H1>
          <Text textAlign="justify" fontSize={fontSize.lg}>
            Tenha o mundo desportivo em suas mãos, acompanhe e receba alertas
            dos acontecimentos ou eventos das tuas modalidades favoritas.
          </Text>

          <RowView>
            <Button
              primary
              label="Iniciar Sessão"
              onPress={() => navigate(ROUTES.SIGN_IN)}
            />
            <Button
              label="Criar conta"
              onPress={() => navigate(ROUTES.SIGN_UP)}
            />
          </RowView>
        </Container>
      </Container>
    </SafeArea>
  );
};

export default Welcome;
