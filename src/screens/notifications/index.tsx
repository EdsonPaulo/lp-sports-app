import { useNavigation } from '@react-navigation/core';
import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Button, Radio, Text } from 'react-native-magnus';

import AthletismIMG from '../../assets/images/athletism.png';
import AutomobilismIMG from '../../assets/images/automobilism.png';
import SoccerIMG from '../../assets/images/soccer.png';
import { Header, SafeArea } from '../../components';
import { ESports } from '../../constants/enums';
import ROUTES from '../../constants/routes';
import { useAuthContext } from '../../contexts/auth';
import SportEvents from './sport-events';

const Notifications: FC = () => {
  const { isLoading, signIn } = useAuthContext();
  const { navigate } = useNavigation();
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const handleSelectSportEvent = (eventName: string) => {
    if (selectedEvents.includes(eventName))
      setSelectedEvents(selectedEvents.filter(e => e !== eventName));
    else setSelectedEvents([...selectedEvents, eventName]);
  };

  const handleContinue = () => {
    navigate(ROUTES.PAYMENT);
  };

  const handleSkip = async () => {
    await signIn({ phone: '', password: '' });
  };

  return (
    <SafeArea bg="gray100">
      <Header allowGoBack />
      <ScrollView>
        <Box px="2xl" pb="xl">
          <Text fontSize="6xl">
            Subscrever ao serviço de notificações (opcional)
          </Text>

          <Box>
            <Text mt="xl" mb="md" fontSize="xl" color="gray700">
              Notificar-me para
            </Text>

            <SportEvents
              title={ESports.Futebol}
              img={SoccerIMG}
              selectedEvents={selectedEvents}
              onSelect={handleSelectSportEvent}
              notifyEvents={[
                'Jogos em directo',
                'Notícias das principais ligas',
                'Golos das minha equipas',
                'Resultados finais',
              ]}
            />

            <SportEvents
              title={ESports.Atletismo}
              img={AthletismIMG}
              selectedEvents={selectedEvents}
              onSelect={handleSelectSportEvent}
              notifyEvents={[
                'Open da Austrália',
                'Rafael Nadal & Roger Federer Daily',
              ]}
            />

            <SportEvents
              title={ESports.Automobilismo}
              img={AutomobilismIMG}
              selectedEvents={selectedEvents}
              onSelect={handleSelectSportEvent}
              notifyEvents={['Fórmula 1 - Corridas', 'Mais pole-position´s']}
            />
          </Box>

          <Box my="xl" h={1} bg="gray500" />

          <Box>
            <Text fontWeight="bold" fontSize="4xl" color="gray900">
              Política de Envio
            </Text>
            <Text my="sm" fontSize="xl" color="gray700">
              Receber notificações de forma:
            </Text>

            <Radio.Group my="lg">
              <Radio
                value="1"
                activeColor="crimson"
                inactiveColor="crimson"
                suffix={
                  <Text ml="sm" fontSize="xl" color="gray900">
                    Imediata (assim que disponível)
                  </Text>
                }
              >
                <Box />
              </Radio>

              <Radio
                mt="lg"
                value="2"
                activeColor="crimson"
                inactiveColor="crimson"
                suffix={
                  <Text ml="sm" fontSize="xl" color="gray900">
                    Sumários (agendados de tempo em tempo)
                  </Text>
                }
              >
                <Box />
              </Radio>
            </Radio.Group>
          </Box>

          <Box my="xl" h={1} bg="gray500" />

          <Button
            block
            bg="crimson"
            rounded="lg"
            loading={isLoading}
            onPress={handleContinue}
          >
            Continuar com subscrição
          </Button>

          <Text textAlign="center" mt="xl" mb="md" color="gray700">
            Vou subscrever mais tarde
          </Text>
          <Button
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
      </ScrollView>
    </SafeArea>
  );
};

export default Notifications;
