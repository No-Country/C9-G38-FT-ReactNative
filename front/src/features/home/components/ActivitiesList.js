import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Fonts from '../../../styles/theme/Fonts';
import { data } from '../../../constants/data';
import UserFollowHorCard from './UserFollowHorCard';
import useFetch from '../../../hooks/useFetch';
import URL from '../../../constants/endpoints';

const ActivitiesList = () => {
  const [data, setData] = useState();
  const connect = useFetch();

  const getFollowers = async () => {
    const resp = await connect({
      url: URL.GET_FIRST_USERS,
    });
    console.log('@@@', resp);
    setData(resp);
  };

  useEffect(() => {
    getFollowers();
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>Mis seguidores</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <UserFollowHorCard key={item.id} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  subtitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxxLarge,
  },
});
export default ActivitiesList;
