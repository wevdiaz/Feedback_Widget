import 'react-native-gesture-handler';

// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>      

      <StatusBar 
          style="light"
          backgroundColor='transparent'
          translucent 
      />

      <Text style={{color: "white", fontSize: 20}}>Hello World direto do React Native</Text>


      <Widget />   
      

    </View>
  );
}


