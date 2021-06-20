import { useNavigation } from '@react-navigation/core';
import React, { FC, useState } from 'react';
import { Box, Button, Text } from 'react-native-magnus';

import AthletismIMG from '../../../assets/images/athletism.png';
import AutomobilismIMG from '../../../assets/images/automobilism.png';
import SoccerIMG from '../../../assets/images/soccer.png';
import { Header, SafeArea } from '../../../components';
import { ESports } from '../../../constants/enums';
import { useAuthContext } from '../../../contexts/auth';

import Sport from './components/sport';

const SelectSport: FC = () => {
  const {
    isLoading,
    // SelectSport
  } = useAuthContext();
  const { navigate } = useNavigation();
  const [selectedSport, setSelectedSport] = useState('');

  const handleSelectSport = (sportName: string) => {
    if (selectedSport !== sportName) setSelectedSport(sportName);
  };

  return (
    <SafeArea bg="gray100">
      <Header allowGoBack />
      <Box px="2xl" py="xl" flex={1} justifyContent="space-between">
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

        <Box>
          <Button
            block
            bg="crimson"
            rounded="lg"
            loading={isLoading}
            onPress={() => {}}
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
            onPress={() => {}}
          >
            Saltar
          </Button>
        </Box>
      </Box>
    </SafeArea>
  );
};

export default SelectSport;
