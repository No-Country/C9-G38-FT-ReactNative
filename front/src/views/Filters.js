import React from "react";
import { View, Text, Button } from "react-native";
import FilterAge from "../features/search/components/FilterAge";
import RangeSlider from "../features/search/components/FilterAgeRanger";
import AgeRangeSlider from "../features/search/components/FilterAgeRanger";


import { FilterCategories } from "../features/search/components/FilterCategories";
import FilterGender from "../features/search/components/FilterGender";
import { useFilterStore } from "../store/filterStore";

const Filters = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState([]);
  const { setCategorie } = useFilterStore();

  const saveHandler = () => {
    setCategorie(selected);
    navigation.goBack();
  };

  return (
    <View>
      <FilterGender />

      <FilterAge />

      <RangeSlider/>

      <FilterCategories selected={selected} setSelected={setSelected} />

      <Button onPress={saveHandler} title="Guardar preferencias" />
    </View>
  );
};

export default Filters;
