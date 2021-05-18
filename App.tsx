import 'react-native-gesture-handler';
import 'react-native-get-random-values';
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

import theme from './src/constants/theme';
import { AuthContextProvider } from './src/contexts/auth';
import Routes from './src/routes';

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
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
export default App;
