import { useEffect, Fragment } from 'react';
import { useAuthStore } from '../store/authStore';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register from '../views/Register';
import Onboarding from '../views/Onboarding';
import Map from '../features/profile/components/Maps.jsx';
import UpdateProfile from '../views/UpdateProfile';
import UserPreferences from '../views/UserPreferences';
import Filters from '../views/Filters';
import Search from '../views/Search';
import Preferences from '../views/Preferences';
import UserDetail from '../views/UserDetail';

const Stack = createStackNavigator();

export function Navigation() {
  const authToken = useAuthStore((state) => state.authToken);
  const getAuth = useAuthStore((state) => state.getAuth);

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {authToken ? (
        <>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Filters" component={Filters} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen
            name="UserPreferences"
            component={UserPreferences}
            options={{ title: 'Preferencias' }}
          />
          <Stack.Screen 
            name="UserDetail" 
            component={UserDetail} 
            options={{ title: '' }}
            />
        </>
      ) : (
        <>
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
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
