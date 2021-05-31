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

import { TextInput, SafeArea, Header } from '../../components';
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
    <SafeArea pb="2xl" bg="white" justifyContent="space-between">
      <Header allowGoBack title={ROUTES.SIGN_IN} />

      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ padding: 5 }}
        >
          <Box p="2xl">
            <Text mb="2xl" fontSize="2xl" textAlign="center">
              Bem - Vindo
            </Text>

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
              <Text my="lg" textAlign="right" color="gray900">
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>

            <Button
              block
              bg="crimson"
              rounded="lg"
              loading={isLoading}
              onPress={handleSignIn}
            >
              Iniciar Sessão
            </Button>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_UP)}>
        <Box flexDir="row" justifyContent="center">
          <Text>Não tem conta?</Text>
          <Text ml="xs" color="crimson">
            Fazer cadastro
          </Text>
        </Box>
      </TouchableOpacity>
    </SafeArea>
  );
};

export default SignIn;
