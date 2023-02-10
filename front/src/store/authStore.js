import { create } from 'zustand';
import { AsyncStorage } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const useAuthStore = create((set) => ({
    authToken: '',
    getAuth: async () => {
        let value = await SecureStore.getItemAsync('token');
        //console.log(value);
        set(() => ({
            authToken: value
        }))
    },
    setAuth: async (token) => {
        await SecureStore.setItemAsync('token', token);
        //console.log(token);
        set(() => ({
            authToken: token
        }))
    },
    logout: async () => {
        await SecureStore.removeItemAsync('token');
        set(() => ({
            authToken: ''
        }))
    }
}));