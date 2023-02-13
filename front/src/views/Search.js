import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import RangeSlider from "../features/search/components/FilterAgeRanger";

import { FilterCategories } from "../features/search/components/FilterCategories";
import FilterGender from "../features/search/components/FilterGender";
import { useFilterStore } from "../store/filterStore";
import Filters from "./Filters";

const Search = ({ navigation }) => {
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
            alignItems: "center",
            backgroundColor: selectInterest ? "#a6a6a6" : "#DDDDDD",
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

export default Search;
