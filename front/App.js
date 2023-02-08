import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigation } from './src/routes/Navigation';
import useCachedResources from './src/hooks/useCachedResources';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
