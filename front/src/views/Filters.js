import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import RangeSlider from '../features/search/components/FilterAgeRanger';

import { FilterCategories } from '../features/search/components/FilterCategories';
import FilterGender from '../features/search/components/FilterGender';
import { useFilterStore } from '../store/filterStore';
import CSButton from '../common/ui/Button';
import { useUserStore } from '../store/userStore';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';
import CategoryPicker from '../features/preferences/components/CategoryPicker';

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
      gender: gender,
      sports: selected.map((item) => {
        return {
          id: item.id,
        };
      }),
    };

    const resp = await connect({ url: URL.SEARCH_USERS, data });
    setUsers(resp);
  };

  const saveHandler = () => {
    // setCategorie(selected);
    setSelectInterest(!selectInterest);
    saveFilters();
    // navigation.navigate('Search');
    navigation.goBack(null);
  };
  return (
    <View>
      <FilterGender />

      <RangeSlider />

      <CategoryPicker selected={selected} setSelected={setSelected} />

      {/* <FilterCategories selected={selected} setSelected={setSelected} /> */}

      {/* <CSButton onPress={saveHandler()} label="Guardar" /> */}

      <Pressable style={styles.button} onPress={saveHandler}>
        <Text style={styles.text}>Guardar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#537FE7',
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Filters;
