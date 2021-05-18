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

const SignIn: React.FC = () => {
  const {
    colors,
    metrics: { fontSize },
  } = useTheme();
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
              <Text fontSize={fontSize.xxl}>Bem - Vindo</Text>
            </Box>

            <Input
              onChangeText={setPhone}
              type="phone"
              placeholder="Telefone"
            />
            <Input
              onChangeText={setPassword}
              type="password"
              placeholder="Palavra-passe"
            />

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_UP)}>
              <Box marginVertical="5px" alignItems="flex-end">
                <Text color={colors.textDark}>Esqueceu a senha?</Text>
              </Box>
            </TouchableOpacity>

            <RowView marginBottom="10px">
              <Button
                primary
                isLoading={isLoading}
                label="Iniciar Sessão"
                onPress={handleSignIn}
              />
            </RowView>

            <TouchableOpacity onPress={() => navigate(ROUTES.SIGN_UP)}>
              <RowView justifyContent="center">
                <Text>Não tem conta?</Text>
                <Text marginLeft="5px" color={colors.accent}>
                  Fazer cadastro
                </Text>
              </RowView>
            </TouchableOpacity>
          </StyledScrollView>
        </KeyboardAvoidingView>
      </Container>
    </SafeArea>
  );
};

export default SignIn;
