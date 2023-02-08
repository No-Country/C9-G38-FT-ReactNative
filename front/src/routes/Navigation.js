import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register from '../views/Register';
import Onboarding from '../views/Onboarding';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
