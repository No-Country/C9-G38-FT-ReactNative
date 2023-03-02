import React, { useEffect } from 'react';
import { View } from 'react-native';
import colors from "../../../constants/colors";
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
    <View >
      <MultipleSelectList
        // style={styles.prop}
        setSelected={(val) => categorieHandler(val)}
        data={categoriesList}
        save="key"
        placeholder="Categorias"
        defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}
        searchPlaceholder="Contanos tus preferencias"
        // searchPlaceHolderColor={colors.darkBlue}
        dropdownStyles={{
          backgroundColor: colors.white,
          position: 'absolute',
          width: '100%',
          marginTop: 50,
          zIndex: 8,
          borderColor: colors.green,
          borderWidth: 2,
        }}
        // dropdownItemStyles={{ marginHorizontal: 12,  }}
        // // searchInputTxtColor={colors.darkBlue}
        // searchInputStyle={{color: colors.darkBlue, backgroundColor:colors.darkBlue}}
        // searchInputTxtColor={colors.darkBlue}
      />
    </View>
  );
};
