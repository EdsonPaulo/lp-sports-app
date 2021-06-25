import React, { FC, useState } from 'react';
import { Box, Button, Radio, Text } from 'react-native-magnus';

import { Header, SafeArea } from '../../components';
import { useAuthContext } from '../../contexts/auth';

const Payment: FC = () => {
  const { isLoading, signIn } = useAuthContext();
  const [value, setValue] = useState('');

  const handleContinue = async () => {
    await signIn({ phone: '', password: '' });
  };

  return (
    <SafeArea bg="gray100">
      <Header allowGoBack />
      <Box px="2xl" pb="xl">
        <Text fontSize="5xl">Pagamento dos serviços de notificações</Text>

        <Text mt="lg" fontSize="2xl" color="gray600">
          Desejo pagar os serviços mediante:
        </Text>

        <Radio.Group my="lg" onChange={setValue}>
          <Radio value="1" activeColor="crimson" inactiveColor="crimson">
            <Box ml="sm">
              <Text fontWeight="bold" fontSize="2xl" color="gray900">
                Pagamento por factura
              </Text>
              <Text mt="sm" fontSize="xl" color="gray800">
                Receber de factura detalhada com todas informações enviadas e
                total gasto.
              </Text>
            </Box>
          </Radio>

          <Radio
            my="xl"
            value="2"
            activeColor="crimson"
            inactiveColor="crimson"
          >
            <Box ml="sm">
              <Text fontWeight="bold" fontSize="2xl" color="gray900">
                Cartão pré-pago
              </Text>
              <Text mt="sm" fontSize="xl" color="gray800">
                Adquirir um cartão pré-pago, poderá receber informação da
                plataforma até esgotar o saldo do cartão.
              </Text>
            </Box>
          </Radio>

          <Radio value="3" activeColor="crimson" inactiveColor="crimson">
            <Box ml="sm">
              <Text fontWeight="bold" fontSize="2xl" color="gray900">
                Plano Mensal
              </Text>
              <Text mt="sm" fontSize="xl" color="gray800">
                Receber quantidade de informações baseada no plano subscrito.
              </Text>
            </Box>
          </Radio>
        </Radio.Group>

        <Radio.Group row justifyContent="space-between">
          <Radio
            value="amador"
            activeColor="chocolate"
            disabled={value !== '3'}
          >
            <Text ml="xs" color="gray900">
              Amador
            </Text>
          </Radio>

          <Radio value="vip" activeColor="chocolate" disabled={value !== '3'}>
            <Text ml="xs" color="gray900">
              VIP
            </Text>
          </Radio>

          <Radio
            value="superStar"
            activeColor="chocolate"
            disabled={value !== '3'}
          >
            <Text ml="xs" color="gray800">
              SuperStar
            </Text>
          </Radio>
        </Radio.Group>

        <Box my="xl" h={1} bg="gray500" />

        <Button
          block
          bg="crimson"
          rounded="lg"
          loading={isLoading}
          onPress={handleContinue}
        >
          Finalizar
        </Button>
      </Box>
    </SafeArea>
  );
};

export default Payment;
