import { useEffect, Fragment } from "react";
import { useAuthStore } from "../store/authStore";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/Home";
import Login from "../views/Login";
import Profile from "../views/Profile";
import Register from "../views/Register";
import Onboarding from "../views/Onboarding";
import Map from "../features/profile/components/Maps.jsx";
import UpdateProfile from "../views/UpdateProfile";

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
