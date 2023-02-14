import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFilterStore } from '../store/filterStore';
import Filters from './Filters';

const Preference = ({ navigation }) => {
  const [selectInterest, setSelectInterest] = useState(false);

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const filtersHandler = () => {
    setSelectInterest(!selectInterest);
  };

  return (
    <View>
      <Text>Search View</Text>

      <TouchableOpacity onPress={filtersHandler}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: selectInterest ? '#a6a6a6' : '#DDDDDD',
            padding: 10,
          }}
        >
          <Text>Intereses</Text>
        </View>
      </TouchableOpacity>

      <Text>Buscar Jugadores:</Text>

      {selectInterest === false ? (
        <View>
          <Text>{categories}</Text>
          <Text>{gender}</Text>
          <Text>
            {agesrange ? ` entre ${agesrange[0]} y ${agesrange[1]}` : null}
          </Text>
        </View>
      ) : null}

      {selectInterest ? (
        <Filters
          selectInterest={selectInterest}
          setSelectInterest={setSelectInterest}
        />
      ) : null}
    </View>
  );
};

export default Preference;
