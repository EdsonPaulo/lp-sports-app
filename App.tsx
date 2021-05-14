import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import { SafeArea, Container, H1, Text } from './src/components';

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
    <SafeAreaProvider>
      <SafeArea>
        <Container>
          <H1>Open up App.tsx to start working on your app!</H1>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </Container>
      </SafeArea>
    </SafeAreaProvider>
  );
};
export default App;
