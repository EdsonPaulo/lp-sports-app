import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
  Box,
  Button,
  Container,
  Input,
  RowView,
  SafeArea,
  Text,
} from '../../components';
import ROUTES from '../../constants/routes';
import { useAuthContext } from '../../contexts/auth';

import { StyledScrollView } from './styles';

const SignUp: React.FC = () => {
  const {
    colors,
    metrics: { fontSize },
  } = useTheme();
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
    <SafeArea>
      <Container justifyContent="space-between">
        <Container />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
          style={{ flex: 1.7 }}
        >
          <StyledScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ width: '100%', padding: 5 }}
          >
            <Box alignItems="center" marginBottom="20px">
              <Text fontSize={fontSize.lg}>
                Informe seus dados para criar um conta
              </Text>
            </Box>

            <Input
              onChangeText={setName}
              type="name"
              placeholder="Nome e sobrenome"
            />
            <Input
              onChangeText={setPhone}
              type="phone"
              placeholder="Telefone"
            />
            <Input
              onChangeText={setEmail}
              type="email"
              placeholder="Seu email"
            />
            <Input
              onChangeText={setPassword}
              type="password"
              placeholder="Palavra-passe"
            />

            <RowView marginBottom="10px">
              <Button
                primary
                isLoading={isLoading}
                label="Iniciar Sessão"
                onPress={handleSignUp}
              />
            </RowView>

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_IN)}>
              <RowView justifyContent="center">
                <Text>Já tem uma conta?</Text>
                <Text marginLeft="5px" color={colors.accent}>
                  Iniciar sessão
                </Text>
              </RowView>
            </TouchableOpacity>
          </StyledScrollView>
        </KeyboardAvoidingView>
      </Container>
    </SafeArea>
  );
};

export default SignUp;
