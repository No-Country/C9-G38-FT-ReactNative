import React from 'react';

import { StyleSheet } from 'react-native';
import { useUserStore } from '../../../store/userStore';
import Fonts from '../../../styles/theme/Fonts';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const SearchbarComponent = () => {
  const { searchbarValue, filterSearchUser } = useUserStore((store) => store);

  return (
    <Searchbar
      placeholder="Buscar"
      onChangeText={filterSearchUser}
      value={searchbarValue}
      inputStyle={styles.input}
      style={styles.search}
      icon={() => <FontAwesome name="search" size={24} color={'black'} />}
    />
  );
};

const styles = StyleSheet.create({
  search: {
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
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.5,
  },
});

export default SearchbarComponent;
