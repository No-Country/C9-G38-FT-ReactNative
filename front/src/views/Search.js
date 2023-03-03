import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserStore } from '../store/userStore';

import FilteredSearch from '../features/search/components/FilteredSearch';

import { data } from '../constants/data';
import CardItem from '../features/search/components/CardItem';
import CardList from '../features/search/components/CardList';
import { useFilterStore } from '../store/filterStore';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Fonts from '../styles/theme/Fonts';

const Search = ({ navigation }) => {
  const { users, setUsers } = useUserStore((state) => state);
  const [refresh, setRefresh] = useState(false);
  const { getAllUsers } = useUserStore();
  const connect = useFetch();

  const [searchText, setSearchText] = useState('');
  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const [loadingUsers, setLoadingUsers] = useState(false);

  const pullRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false), getUsers();
    }, 2000);
  };

  const getUsers = async () => {
    setLoadingUsers(true);

    getAllUsers();

    // const data = {
    //   minAge: 20,
    //   maxAge: 40,
    //   ratio: 14,
    //   // sports: categories.map((item) => {
    //   //   return {
    //   //     id: item,
    //   //   };
    //   // }),
    // };

    // const resp = await connect({ url: URL.SEARCH_USERS, data });
    // console.log({resp});
    // setUsers(resp);
    // setLoadingUsers(false);
  };

  const filteredUsers = users.filter((user) => {
    const name = user.fullname.toLowerCase();
    const email = user.email.toLowerCase();
    const searchTerm = searchText.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    getAllUsers();
    getUsers();
  }, []);

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={styles.headWrapper}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={handleSearch}
          value={searchText}
          inputStyle={styles.input}
          style={styles.search}
          icon={() => <FontAwesome name="search" size={24} color={'black'} />}
        />
        <Pressable
          onPress={() =>
            navigation.navigate('Preferences', {
              fromProfile: false,
            })
          }
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            marginTop: 10,
            marginLeft: 10,
          })}
        >
          <FontAwesome name="sliders" size={28} color={'black'} />
        </Pressable>
      </View>
      {/* <Searchbar /> */}

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

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item: element }) => (
          // <Text>asda</Text>
          <CardItem
            navigation={navigation}
            avatar={element.avatar}
            username={element.username}
            intereses={element.sports}
            user={element}
            id={element.id}
          />
        )}
      />

      {/* <FlatList
  data={users}
  keyExtractor={item => item.id}
  renderItem={({ item: element }) => (
    // <Text>asda</Text>
    <CardItem
      navigation={navigation}
      avatar={element.avatar}
      username={element.username}
      intereses={element.sports}
      user={element}
      id={element.id}
    />
  )}
/> */}

      {/* <CardList users={users} navigation={navigation} reloadUsers={getUsers} loading={loadingUsers} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headWrapper: {
    marginHorizontal: 10,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  search: {
    width: '90%',
    backgroundColor: 'red',
    border: 'none',
    elevation: 0,
    backgroundColor: 'white',
    backgroundColor: '#FBFBFB',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 20,
    borderTopWidth: 0, //works
    borderBottomWidth: 0, //works
  },
  input: {
    fontFamily: Fonts.type.semiBold,
    marginTop: 5,
  },
});

export default Search;
