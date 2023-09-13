import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { Home } from './src/screens/Home';

import * as SplashScreen from 'expo-splash-screen';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    SplashScreen.hideAsync()
    return null;
  }

  return (
    <Fragment>
      <Home />
      <StatusBar style='light' />
    </Fragment>
  );
}
