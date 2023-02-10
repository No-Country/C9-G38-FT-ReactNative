import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

import { FilterCategories } from "../features/search/components/FilterCategories";
import { useFilterStore } from "../store/filterStore";

const Search = ({ navigation }) => {
  const categories = useFilterStore((state) => state.categories);
  const gender = useFilterStore((state) => state.gender);
  const ages = useFilterStore((state) => state.ages);
  const agesrange = useFilterStore((state) => state.agesrange);

  return (
    <View>
      <Text>Search View</Text>

      <Text>Buscar Jugadores:</Text>

      <Button
        onPress={() => navigation.navigate("Filters")}
        title="GO FILTERS"
      />

      <Text>CATEGORIAS: {categories}</Text>
      <Text>GENERO: {gender}</Text>
      <Text>EDAD: {ages}</Text>
      <Text>
        RANGOS: {agesrange ? ` entre ${agesrange[0]} y ${agesrange[1]}` : null}
      </Text>
    </View>
  );
};

export default Search;
