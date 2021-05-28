import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider as MangnusThemeProvider } from 'react-native-magnus';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import theme from './src/constants/theme';
import { AuthContextProvider } from './src/contexts/auth';
import Routes from './src/routes';

enableScreens();

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider theme={theme}>
      <MangnusThemeProvider>
        <SafeAreaProvider>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </SafeAreaProvider>
      </MangnusThemeProvider>
    </ThemeProvider>
  );
};
export default App;
