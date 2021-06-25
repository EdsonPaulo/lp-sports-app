import { useNavigation } from '@react-navigation/core';
import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import { Box, Button, Text } from 'react-native-magnus';

import AthletismIMG from '../../assets/images/athletism.png';
import AutomobilismIMG from '../../assets/images/automobilism.png';
import SoccerIMG from '../../assets/images/soccer.png';
import { Header, SafeArea } from '../../components';
import { ESports } from '../../constants/enums';
import ROUTES from '../../constants/routes';
import { useAuthContext } from '../../contexts/auth';

import Sport from './sport';

const SelectSport: FC = () => {
  const { isLoading, signIn } = useAuthContext();
  const { navigate } = useNavigation();
  const [selectedSport, setSelectedSport] = useState('');

  const handleSelectSport = (sportName: string) => {
    if (selectedSport !== sportName) setSelectedSport(sportName);
  };

  const handleSkip = async () => {
    await signIn({ phone: '', password: '' });
  };

  const handleContinue = () => {
    if (!selectedSport) {
      Alert.alert('Selecione uma modalidade primeiro');
      return;
    }
    navigate(ROUTES.NOTIFICATIONS);
  };

  return (
    <SafeArea bg="gray100">
      <Header allowGoBack />
      <Box px="2xl" py="lg" flex={1} justifyContent="space-between">
        <Box>
          <Text fontSize="5xl">Qual é a sua modalidade favorita</Text>
          <Text my="xl" fontSize="xl" color="gray700">
            Poderá alterar mais tarde
          </Text>
        </Box>

        <Box>
          <Sport
            name={ESports.Futebol}
            img={SoccerIMG}
            selectedSport={selectedSport}
            onSelect={handleSelectSport}
          />

          <Box mt="md" flexDir="row" justifyContent="space-between">
            <Sport
              name={ESports.Automobilismo}
              img={AutomobilismIMG}
              selectedSport={selectedSport}
              onSelect={handleSelectSport}
            />

            <Sport
              name={ESports.Atletismo}
              img={AthletismIMG}
              selectedSport={selectedSport}
              onSelect={handleSelectSport}
            />
          </Box>
        </Box>

        <Box mt="lg">
          <Button
            block
            bg="crimson"
            rounded="lg"
            loading={isLoading}
            onPress={handleContinue}
          >
            Continuar
          </Button>
          <Button
            mt="sm"
            block
            bg="gray100"
            color="crimson"
            rounded="lg"
            loading={isLoading}
            onPress={handleSkip}
          >
            Saltar
          </Button>
        </Box>
      </Box>
    </SafeArea>
  );
};

export default SelectSport;
