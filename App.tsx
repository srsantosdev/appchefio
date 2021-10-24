import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'

import { PublicRoutes } from './src/routes/public.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar translucent style="dark" />
      <PublicRoutes />
    </>
  );
}
