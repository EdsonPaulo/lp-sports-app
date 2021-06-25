import Icon from '@expo/vector-icons/Feather';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Box, Text } from 'react-native-magnus';

import User from '../../assets/images/user.jpg';
import { SafeArea } from '../../components';
import { useAuthContext } from '../../contexts/auth';

const Item: FC<{
  title: string;
  value: string;
  icon: string;
}> = ({ icon, title, value }) => (
  <Box my="md" row alignItems="center">
    <Box p="md" bg="gray400" rounded="2xl">
      <Icon size={20} name={icon as never} />
    </Box>
    <Box ml="lg" flex={1}>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text mt="xs" fontSize="xl" borderColor="gray700">
        {value}
      </Text>
      <Box mt="lg" borderColor="gray500" borderBottomWidth={1} />
    </Box>
  </Box>
);

const Profile: FC = () => {
  const { user, signOut } = useAuthContext();

  return (
    <SafeArea p="xl" bg="gray100">
      <Box>
        <Box alignItems="center">
          <Avatar size={80} source={User} />
          <Text my="md" fontWeight="bold" fontSize="3xl">
            {user?.name}
          </Text>
          <Text color="gray700">HallaMadridYNadaMás</Text>
        </Box>

        <Box my="lg" row alignItems="center">
          <Box flex={1} p="lg" rounded="2xl" bg="darkred">
            <Text color="white">Meu Perfil</Text>
          </Box>

          <Box mx="lg" flex={1} p="lg" rounded="2xl" bg="transparent">
            <Text color="gray800">Actividades</Text>
          </Box>

          <Box flex={1} p="lg" rounded="2xl" bg="transparent">
            <Text color="gray800">Definições</Text>
          </Box>
        </Box>

        <Box my="lg">
          {user?.name && <Item title="Nome" value={user?.name} icon="user" />}

          {user?.email && (
            <Item title="Email" value={user?.email} icon="mail" />
          )}

          {user?.phone && (
            <Item title="Phone" value={user?.phone} icon="phone" />
          )}

          {user?.address && (
            <Item title="Endereço" value={user?.address} icon="map" />
          )}
        </Box>

        <TouchableOpacity onPress={signOut}>
          <Box alignItems="center">
            <Icon size={25} name="power" color="crimson" />
          </Box>
        </TouchableOpacity>
      </Box>
    </SafeArea>
  );
};

export default Profile;
