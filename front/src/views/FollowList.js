import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';
import CardList from '../features/search/components/CardList';

const FollowList = ({ navigation, route }) => {
  const [followers, setFollowers] = useState();
  const id = route.params.id;
  const connect = useFetch();

  const getMyProfile = async () => {
    const resp = await connect({
      url: URL.GET_FOLLOWERS,
      extra: id,
    });
    console.log(resp);
    setFollowers(resp);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardList users={followers} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default FollowList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
