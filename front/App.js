import React from "react"

import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { Navigation } from "./MainStack";

export default function App() {
  return (

    <NavigationContainer>
   
        <Navigation/>
        
    </NavigationContainer>
  );
}


