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
    <SafeArea bg="gray100">
      <Box flex={1} justifyContent="space-between">
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
            <Box alignItems="center" mb="md">
              <Text fontSize="2xl">Informe seus dados para criar um conta</Text>
            </Box>

            <TextInput
              onChangeText={setName}
              type="name"
              placeholder="Nome e sobrenome"
            />
            <TextInput
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
              onChangeText={setPassword}
              type="password"
              placeholder="Palavra-passe"
            />

            <Box flexDir="row" mb="md">
              <Button bg="crimson" loading={isLoading} onPress={handleSignUp}>
                Criar conta
              </Button>
            </Box>

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_IN)}>
              <Box flexDir="row" justifyContent="center">
                <Text>Já tem uma conta?</Text>

                <Text ml="xs" color="crimson">
                  Iniciar sessão
                </Text>
              </Box>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Box>
    </SafeArea>
  );
};

export default SignUp;
