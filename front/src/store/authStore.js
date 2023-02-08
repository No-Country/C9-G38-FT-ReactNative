import { create } from 'zustand';
import { AsyncStorage } from 'react-native';

export const useAuthStore = create((set) => ({
    authToken: '',
    getAuth: async () => {
        let value = await AsyncStorage.getItem('token');
        console.log(value);
        set(() => ({
            authToken: value
        }))
    },
    setAuth: async (token) => {
        await AsyncStorage.setItem('token', token);
        console.log(token);
        set(() => ({
            authToken: token
        }))
    },
    logout: async () => {
        await AsyncStorage.removeItem('token');
        set(() => ({
            authToken: ''
        }))
    }
}));