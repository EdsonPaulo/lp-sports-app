import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Image } from 'react-native-magnus';
import Icon from '@expo/vector-icons/Feather';

import AthletismIMG from '../../assets/images/athletism.png';
import AutomobilismIMG from '../../assets/images/automobilism.png';
import SoccerIMG from '../../assets/images/soccer.png';
import EnglandFlag from '../../assets/images/england.png';
import EnglandGame from '../../assets/images/england-game.png';
import SpainFlag from '../../assets/images/spain.png';
import SpainGame from '../../assets/images/spain-game.png';
import BannerIMG from '../../assets/images/banner.jpg';
import { Header, SafeArea } from '../../components';
import { ESports } from '../../constants/enums';
import Game from './game';
import Sport from './sport';

const Home: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState(ESports.Futebol);

  const handleSelectSport = (sportName: ESports) => {
    if (selectedSport !== sportName) setSelectedSport(sportName);
  };

  return (
    <SafeArea pt="lg" bg="gray100">
      <Box mx="lg">
        <Header
          title="LP Sport"
          leftItem={
            <Box row alignItems="center">
              <Icon name="search" size={20} color="gray800" />
              <Box mx="md" />
              <Box>
                <Icon name="bell" size={20} color="gray800" />
                <Box
                  mt="xs"
                  w={8}
                  h={8}
                  top={-5}
                  right={0}
                  bg="crimson"
                  position="absolute"
                  rounded="circle"
                />
              </Box>
            </Box>
          }
        />
      </Box>

      <Box px="xl">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt="sm" mb="xl" h={170} bg="crimson" rounded="xl">
            <Image w="100%" h="100%" resizeMode="stretch" source={BannerIMG} />
          </Box>

          <Box mb="lg" maxH={100} flexDir="row">
            <Box flex={1}>
              <Sport
                name={ESports.Futebol}
                img={SoccerIMG}
                selectedSport={selectedSport}
                onSelect={handleSelectSport}
              />
            </Box>

            <Box mx="md" flex={1}>
              <Sport
                name={ESports.Atletismo}
                img={AthletismIMG}
                selectedSport={selectedSport}
                onSelect={handleSelectSport}
              />
            </Box>

            <Box flex={1}>
              <Sport
                name={'Automobil.' as never}
                img={AutomobilismIMG}
                selectedSport={selectedSport}
                onSelect={handleSelectSport}
              />
            </Box>
          </Box>

          <Box my="lg" h={1} bg="gray400" />

          <Game
            league="La Liga"
            country="Espanha"
            leagueLogo={SpainFlag}
            gameLogo={SpainGame}
            team1={{ name: 'Barcelona', goals: 1 }}
            team2={{ name: 'R. Madrid', goals: 5 }}
          />

          <Box mt="xl" mb="lg" h={1} bg="gray400" />

          <Game
            league="Premier League"
            country="Inglaterra"
            leagueLogo={EnglandFlag}
            gameLogo={EnglandGame}
            team1={{ name: 'Chelsea', goals: 3 }}
            team2={{ name: 'Arsenal', goals: 2 }}
          />

          <Box mt="xl" mb="lg" h={1} bg="gray400" />

          <Game
            league="Serie A"
            country="Itália"
            team1={{ name: 'Inter Milan', goals: 0 }}
            team2={{ name: 'Juventus', goals: 1 }}
          />
        </ScrollView>
      </Box>
    </SafeArea>
  );
};

export default Home;
