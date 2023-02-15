import React from 'react';
import { View, Button } from 'react-native';
import RangeSlider from '../features/search/components/FilterAgeRanger';

import { FilterCategories } from '../features/search/components/FilterCategories';
import FilterGender from '../features/search/components/FilterGender';
import { useFilterStore } from '../store/filterStore';
import CSButton from '../common/ui/Button';

const Filters = ({ navigation, route, selectInterest, setSelectInterest }) => {
  const [selected, setSelected] = React.useState([]);
  const { setCategorie } = useFilterStore();

  const saveHandler = () => {
    setCategorie(selected);
    setSelectInterest(!selectInterest);
  };
  return (
    <View>
      <FilterGender />

      <RangeSlider />

      <FilterCategories selected={selected} setSelected={setSelected} />

      {/* <CSButton onPress={saveHandler()} label="Guardar" /> */}
      <Button onPress={saveHandler} title="Guardar " />
    </View>
  );
};

export default Filters;