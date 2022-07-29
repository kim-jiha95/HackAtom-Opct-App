import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GlobalNav from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
