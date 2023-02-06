import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register from '../views/Register';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
