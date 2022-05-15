import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { Widget } from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      backgroundColor: "blue"     
      
    }}>
      
      <StatusBar 
          style="auto"
          backgroundColor='transparent'
          translucent
       />

      <Widget />

    </View>
  );
}


