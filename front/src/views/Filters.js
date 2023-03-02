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
<<<<<<< HEAD
import Fonts from '../constants/fonts'
import colors from '../constants/colors'

=======
import CategoryPicker from '../features/preferences/components/CategoryPicker';
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7

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
      minAge: agesrange[0] ? agesrange[0] : 20,
      maxAge: agesrange[1] ? agesrange[1] : 99,
      ratio: 14,
      gender: gender,
      sports: selected.map((item) => {
        return {
          id: item.id,
        };
      }),
    };
    console.log('@!!', data, agesrange);

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
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 40,
  },
  text: {
    fontFamily: Fonts.type.Raleway,
    fontWeight: 'bold',
    color: colors.darkBlue,
    fontSize: 16,
  },
});

export default Filters;
