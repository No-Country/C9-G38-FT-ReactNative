import React from 'react';
import { View, Button } from 'react-native';
import RangeSlider from '../features/search/components/FilterAgeRanger';

import { FilterCategories } from '../features/search/components/FilterCategories';
import FilterGender from '../features/search/components/FilterGender';
import { useFilterStore } from '../store/filterStore';
import CSButton from '../common/ui/Button';
import { useUserStore } from '../store/userStore';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';

const Filters = ({ navigation, route, selectInterest, setSelectInterest }) => {
  const [selected, setSelected] = React.useState([]);
  const [resultados, setResultados] = React.useState([]);

  const { setCategorie } = useFilterStore();
  const { setUsers } = useUserStore();
  const connect = useFetch();

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const saveFilters = async () => {
    const data = {
      minAge: agesrange[0],
      maxAge: agesrange[1],
      ratio: 14,
      sports: categories.map((item) => {
        return {
          id: item,
        };
      }),
    };

    const resp = await connect({ url: URL.SEARCH_USERS, data });
    setUsers(resp);
  };

  const saveHandler = () => {
    setCategorie(selected);
    setSelectInterest(!selectInterest);
    saveFilters();
    // navigation.navigate('Search');
    navigation.goBack(null);
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
