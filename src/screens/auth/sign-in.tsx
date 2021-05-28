import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Box, Text } from 'react-native-magnus';

import { TextInput, SafeArea } from '../../components';
import ROUTES from '../../constants/routes';
import { useAuthContext } from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { isLoading, signIn } = useAuthContext();
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (isLoading) return;
    if (!phone || !password) {
      Alert.alert('Informe seu telefone e palavra-passe!');
      return;
    }
    await signIn({ phone, password });
  };

  return (
    <SafeArea bg="gray100" justifyContent="space-between">
      <Box />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{ flex: 1.7 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ width: '100%', padding: 5 }}
        >
          <Box
            p="xl"
            w="100%"
            bg="white"
            borderWidth={1}
            borderColor="gray300"
            roundedTopRight="lg"
            roundedTopLeft="lg"
          >
            <Box alignItems="center" mb="md">
              <Text fontSize="2xl">Bem - Vindo</Text>
            </Box>

            <TextInput
              mb="lg"
              onChangeText={setPhone}
              type="phone"
              placeholder="Telefone"
            />
            <TextInput
              onChangeText={setPassword}
              type="password"
              placeholder="Palavra-passe"
            />

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_UP)}>
              <Box my="sm" alignItems="flex-end">
                <Text color="gray900">Esqueceu a senha?</Text>
              </Box>
            </TouchableOpacity>

            <Box flexDir="row" mb="md">
              <Button bg="crimson" loading={isLoading} onPress={handleSignIn}>
                Iniciar Sessão
              </Button>
            </Box>

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_UP)}>
              <Box flexDir="row" justifyContent="center">
                <Text>Não tem conta?</Text>
                <Text ml="xs" color="crimson">
                  Fazer cadastro
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default SignIn;
