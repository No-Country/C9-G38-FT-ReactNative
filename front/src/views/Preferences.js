import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useFilterStore } from '../store/filterStore';
import { styles } from '../styles/register/register.style';
import Filters from './Filters';
import { useAuthStore } from '../store/authStore';

const Preference = ({ navigation, route }) => {
  const { fromProfile } = route.params;
  const [selectInterest, setSelectInterest] = useState(false);

  const logout = () => useAuthStore((state) => state.logout);

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const filtersHandler = ({ navigation }) => {
    setSelectInterest(!selectInterest);
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Text>{categories}</Text> */}
        <Text>{gender}</Text>
        <Text>
          {agesrange ? ` entre ${agesrange[0]} y ${agesrange[1]}` : null}
        </Text>
      </View>

      <Filters
        navigation={navigation}
        selectInterest={selectInterest}
        setSelectInterest={setSelectInterest}
      />

      <View >
        {fromProfile && <Button style={styles.button} onPress={logout()} title="Cerrar sesion" />}
      </View>
    </View>
  );
};

export default Preference;
