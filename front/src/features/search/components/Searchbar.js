import React from 'react';
import colors from '../../../constants/colors';
import borderRadius from '../../../constants/borderRadius';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useUserStore } from '../../../store/userStore';
import Fonts from '../../../styles/theme/Fonts';
import { FontAwesome } from '@expo/vector-icons';

const SearchbarComponent = () => {
  const { searchbarValue, filterSearchUser } = useUserStore((store) => store);

  return (
    <Searchbar
      placeholder="Buscar"
      placeholderTextColor={colors.font}
      onChangeText={filterSearchUser}
      value={searchbarValue}
      inputStyle={styles.input}
      style={styles.search}
      icon={() => <FontAwesome name="search" size={24} color={colors.font} />}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.background2,
    borderRadius: borderRadius,
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary
  },
  input: {
    fontFamily: Fonts.type.regular,
  },
});

export default SearchbarComponent;
