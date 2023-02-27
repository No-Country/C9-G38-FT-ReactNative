import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserStore } from '../store/userStore';
import Searchbar from '../features/search/components/Searchbar';
import FilteredSearch from '../features/search/components/FilteredSearch';
import { FontAwesome } from '@expo/vector-icons';
import { data } from '../constants/data';
import CardItem from '../features/search/components/CardItem';
import CardList from '../features/search/components/CardList';
import { useFilterStore } from '../store/filterStore';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';

const Search = ({ navigation }) => {
  const { users, filteredUsers, setUsers } = useUserStore((state) => state);
  const connect = useFetch();

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const [loadingUsers, setLoadingUsers] = useState(false);

  const getUsers = async () => {
    setLoadingUsers(true);
    const data = {
      minAge: 20,
      maxAge: 40,
      ratio: 14,
      // sports: categories.map((item) => {
      //   return {
      //     id: item,
      //   };
      // }),
    };

    const resp = await connect({ url: URL.SEARCH_USERS, data });
    setUsers(resp);
    setLoadingUsers(false);
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users]);

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={styles.headWrapper}>
        <Pressable
          onPress={() =>
            navigation.navigate('Preferences', {
              fromProfile: false,
            })
          }
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome name="sliders" size={28} color={'black'} />
        </Pressable>
      </View>
      <Searchbar />

      {/* {users === filteredUsers ? (
        <ScrollView>
          <Text style={styles.textFriends}>Personas sugeridas:</Text>
          <FilteredSearch users={users} />
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.textFriends}>Usuarios encontrados:</Text>
          <FilteredSearch users={filteredUsers} />
        </ScrollView>
      )} */}

      <CardList users={users} navigation={navigation} reloadUsers={getUsers} loading={loadingUsers} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headWrapper: {
    marginHorizontal: 16,
    marginVertical: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Search;
