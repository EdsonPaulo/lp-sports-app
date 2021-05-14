import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import {
  SafeArea,
  Container,
  H1,
  Text,
  Button,
  RowView,
} from './src/components';
import theme from './src/constants/theme';

enableScreens();

const App = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeArea>
          <Container>
            <H1 fontSize="40px">LP SPORTS</H1>
            <H1>Open up App.tsx!</H1>
            <Text>Open up App.tsx to start working on your app!</Text>
            <RowView>
              <Button primary  label="Login" />
              <Button label="Criar conta" />
            </RowView>
            <StatusBar style="auto" />
          </Container>
        </SafeArea>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
export default App;
