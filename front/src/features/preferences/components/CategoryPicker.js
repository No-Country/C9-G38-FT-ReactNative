import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import URL from '../../../constants/endpoints';
import useFetch from '../../../hooks/useFetch';
import Fonts from '../../../styles/theme/Fonts';

const CategoryPicker = ({ selected, setSelected }) => {
  const [categories, setCategories] = useState();
  const connect = useFetch();

  const getCategories = async () => {
    const res = await connect({ url: URL.GET_SPORTS });
    setCategories(res);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = (id) => {
    let pos = selected.map((e) => e.id).indexOf(id);
    selected.splice(pos, 1);
    setSelected(selected);
  };

  const addCategory = (category) => {
    setSelected([...selected, category]);
  };

  return (
    <View>
      <Text style={styles.subtitle}>Deportes de interes:</Text>
      <View style={styles.container}>
        {categories &&
          categories.map((cat) => {
            let found = selected.find((e) => e.id === cat.id);
            //console.log('found', found?.id, i)
            if (found) {
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => deleteCategory(cat.id)}
                  style={styles.selected}
                >
                  <Text style={styles.sportNameActive}>{found.name}</Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => addCategory(cat)}
                  style={styles.unselected}
                >
                  <Text style={styles.sportNameInactive}>{cat.name}</Text>
                </TouchableOpacity>
              );
            }
          })}
      </View>
    </View>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selected: {
    borderRadius: 8,
    padding: 10,
    height: 34,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#40EE96',
    marginBottom: 10,
    marginRight: 10,
  },
  unselected: {
    borderRadius: 8,
    padding: 10,
    height: 34,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#ededed',
    marginBottom: 10,
    marginRight: 10,
  },
  sportNameInactive: {
    fontFamily: Fonts.type.bold,
  },
  sportNameActive: {
    fontFamily: Fonts.type.bold,
    color: 'white',
  },
  subtitle: {
    fontFamily: Fonts.type.semiBold,
    marginBottom: 10,
  },
});
