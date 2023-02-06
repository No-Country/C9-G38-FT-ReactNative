import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/Home';
import Login from './src/views/Login';
import Profile from './src/views/Profile';
import Register from './src/views/Register';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
     
    </Stack.Navigator>
  );
}