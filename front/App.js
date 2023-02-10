import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './src/hooks/useCachedResources';
import 'react-native-gesture-handler';
import { Navigation } from './src/routes/Navigation';

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
