import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';
import CardList from '../features/search/components/CardList';

const FollowList = ({ navigation }) => {
    const authToken = useAuthStore((state) => state.authToken);
    const { users, getAllUsers } = useUserStore((state) => state);

    const getFollowed = async () => {
        const req = await fetch('https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/follows', {
            method: "GET",
            headers: { Authorization: authToken },
        });
        const res = await req.json();
        console.log(res);
    };

    useEffect(() => {
        getFollowed();
        getAllUsers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <CardList users={users} navigation={navigation} />
        </SafeAreaView>
    )
};

export default FollowList;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'red'
    }
});