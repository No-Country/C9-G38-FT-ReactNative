import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import CardList from '../features/search/components/CardList';

const FollowList = ({ navigation }) => {
    const authToken = useAuthStore((state) => state.authToken);

    const [followed, setFollowed] = useState([]);

    const getFollowed = async () => {
        const req = await fetch('https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/follows', {
            method: "GET",
            headers: { Authorization: authToken },
        });
        const res = await req.json();
        //console.log('followed', res.data.follows);
        const list = res.data.follows.map((e => {
            return {
                ...e, sports: []
            }
        }));
        setFollowed(list);
    };

    useEffect(() => {
        getFollowed();
    }, []);

    return (
        <View style={styles.container}>
            <CardList users={followed} navigation={navigation} />
        </View>
    )
};

export default FollowList;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
});