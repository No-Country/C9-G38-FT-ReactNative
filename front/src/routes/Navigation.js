

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
import FollowList from '../views/FollowList';

const Stack = createStackNavigator();

export function Navigation() {
  const authToken = useAuthStore((state) => state.authToken);
  const isComplete = useAuthStore((state) => state.isComplete);
  const getAuth = useAuthStore((state) => state.getAuth);

  useEffect(() => {
    getAuth();
    console.log(authToken, isComplete)
  }, []);

  return (
    <Stack.Navigator initialRouteName="Onboarding">

      { authToken && isComplete ? (
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
          <Stack.Screen
            name="UpdateProfile"
            component={UpdateProfile}
            options={{ title: 'Actualizar perfil' }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            name="Preferences"
            options={{ title: 'Preferencias' }}
            component={Preferences}
          />
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
          <Stack.Screen
            name="FollowList"
            component={FollowList}
            options={({ route }) => ({ title: route.params?.title ?? '' })}
          />
        </>
      ) : authToken && !isComplete ?
      (
        <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ title: 'Actualizar perfil' }}
      />
      ):
       !authToken ?
      (
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
      ):null}
    </Stack.Navigator>
  );
}
