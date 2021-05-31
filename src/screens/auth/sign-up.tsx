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

const SignUp: React.FC = () => {
  const { isLoading, signUp } = useAuthContext();
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (isLoading) return;
    if (!phone || !password || !name || !email) {
      Alert.alert('Preencha os campos obrigatórios!');
      return;
    }
    await signUp({ name, phone, email, password });
  };

  return (
    <SafeArea pb="2xl" bg="white" justifyContent="space-between">
      <Header allowGoBack title={ROUTES.SIGN_UP} />

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
              Informe seus dados para criar uma nova conta
            </Text>

            <TextInput
              onChangeText={setName}
              type="name"
              placeholder="Nome e sobrenome"
            />

            <TextInput
              my="lg"
              onChangeText={setPhone}
              type="phone"
              placeholder="Telefone"
            />

            <TextInput
              onChangeText={setEmail}
              type="email"
              placeholder="Seu email"
            />

            <TextInput
              my="lg"
              onChangeText={setPassword}
              type="password"
              placeholder="Palavra-passe"
            />

            <Button
              block
              bg="crimson"
              rounded="lg"
              loading={isLoading}
              onPress={handleSignUp}
            >
              Criar conta
            </Button>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_IN)}>
        <Box flexDir="row" justifyContent="center">
          <Text>Já tem uma conta?</Text>
          <Text ml="xs" color="crimson">
            Iniciar sessão
          </Text>
        </Box>
      </TouchableOpacity>
    </SafeArea>
  );
};

export default SignUp;
