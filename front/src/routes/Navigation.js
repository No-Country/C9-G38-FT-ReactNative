import { useEffect, Fragment } from 'react';
import { useAuthStore } from '../store/authStore';

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Register from '../views/Register'
import Onboarding from '../views/Onboarding'

const Stack = createStackNavigator()

export function Navigation() {

    const authToken = useAuthStore(state => state.authToken);
    const getAuth = useAuthStore(state => state.getAuth);

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <Stack.Navigator initialRouteName='Onboarding'>
            {authToken ? (
                <>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Profile'
                        component={Profile}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Onboarding'
                        component={Onboarding}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Login'
                        component={Login}
                    />
                    <Stack.Screen name='Register' component={Register} />
                </>
            )
            }
        </Stack.Navigator>
    )
}
