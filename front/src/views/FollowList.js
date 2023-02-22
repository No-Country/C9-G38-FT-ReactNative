import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';

const FollowList = ({ navigation, route }) => {
  const [followers, setFollowers] = useState();
  const id = route.params.id;
  const connect = useFetch();

  const getMyProfile = async () => {
    const resp = await connect({
      url: URL.GET_FOLLOWERS,
      extra: id,
    });
    setFollowers(resp);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView>
      {followers?.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={{ width: '16%', alignItems: 'center' }}
          onPress={() => navigation.navigate('UserDetail', { id: item.id })}
        >
          <Image
            style={{ width: 50, borderRadius: 100, aspectRatio: 1 }}
            source={{
              uri: item.avatar,
            }}
          />
          <Text>{item.username}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default FollowList;

const styles = StyleSheet.create({});
