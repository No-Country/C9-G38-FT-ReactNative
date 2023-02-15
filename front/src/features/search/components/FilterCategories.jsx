import React, { useEffect } from 'react';
import { View } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useFilterStore } from '../../../store/filterStore';

export const FilterCategories = ({ navigation, selected, setSelected }) => {
  const categoriesList = useFilterStore((state) => state.categoriesList);

  const { setCategorie, getCategories } = useFilterStore();

  useEffect(() => {
    getCategories();
  }, []);

  const categorieHandler = (val) => {
    setSelected(val);
    setCategorie(selected);
  };

  return (
    <View style={{ paddingHorizontal: 50 }}>
      <MultipleSelectList
        setSelected={(val) => categorieHandler(val)}
        data={categoriesList}
        save="value"
        placeholder="CATEGORIAS"
        searchPlaceholder="Contanos tus preferencias"
        dropdownStyles={{
          backgroundColor: 'white',
          zIndex: 8,
        }}
        dropdownItemStyles={{ marginHorizontal: 12 }}
      />
    </View>
  );
};