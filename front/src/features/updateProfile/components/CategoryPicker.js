import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import URL from '../../../constants/endpoints';
import useFetch from '../../../hooks/useFetch';
import Fonts from '../../../styles/theme/Fonts';

const CategoryPicker = ({ myProfile, setMyProfile }) => {
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
    let pos = myProfile?.sports.map((e) => e.id).indexOf(id);
    myProfile?.sports.splice(pos, 1);
    setMyProfile({ ...myProfile, sports: myProfile?.sports });
  };

  const addCategory = (category) => {
    setMyProfile({ ...myProfile, sports: [...myProfile.sports, category] });
  };

  return (
    <View style={styles.container}>
      {categories &&
        categories.map((cat) => {
          let found = myProfile.sports.find((e) => e.id === cat.id);
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
    height: 30,
    paddingHorizontal: 15,
    paddingVertical: 4,
    backgroundColor: '#40EE96',
    marginBottom: 10,
    marginRight: 10,
  },
  unselected: {
    borderRadius: 8,
    padding: 10,
    height: 30,
    paddingHorizontal: 15,
    paddingVertical: 4,
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
});
