import React, { useEffect } from 'react';
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
const Search = ({ navigation }) => {
  const { users, filteredUsers, getAllUsers } = useUserStore((state) => state);

  useEffect(() => {
    getAllUsers();
  }, []);

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

      <CardList users={data} navigation={navigation} />
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
