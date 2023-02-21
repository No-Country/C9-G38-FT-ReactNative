import React from "react";
import { View, Button } from "react-native";
import RangeSlider from "../features/search/components/FilterAgeRanger";

import { FilterCategories } from "../features/search/components/FilterCategories";
import FilterGender from "../features/search/components/FilterGender";
import { useFilterStore } from "../store/filterStore";
import CSButton from "../common/ui/Button";


const Filters = ({ navigation, route, selectInterest, setSelectInterest }) => {
  const [selected, setSelected] = React.useState([]);
  const [resultados, setResultados] = React.useState([]);

  const { setCategorie } = useFilterStore();

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  
  const saveFilters = async () => {
    
    const filters = {
      agesrange,
      categories,
      gender,
    };

    const queryString = new URLSearchParams(filters).toString();
    const endpoint = "https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/search" + queryString;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setResultados(data.resultados);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  };



  const saveHandler = () => {
    setCategorie(selected);
    setSelectInterest(!selectInterest);
    saveFilters();
    navigation.navigate("Search")
  };
  return (
    <View>
      <FilterGender />

      <RangeSlider />

      <FilterCategories selected={selected} setSelected={setSelected} />

      {/* <CSButton onPress={saveHandler()} label="Guardar" /> */}
      <Button onPress={saveHandler} title="Guardar" />
    </View>
  );
};

export default Filters;
