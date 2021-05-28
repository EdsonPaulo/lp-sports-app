import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'react-native-magnus';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';

import theme from './src/constants/theme';
import { AuthContextProvider } from './src/contexts/auth';
import Routes from './src/routes';

enableScreens();

const App = () => {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
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
