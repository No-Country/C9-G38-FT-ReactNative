import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useFilterStore } from "../../../store/filterStore";

export const FilterCategories =  ({  selected, setSelected }) => {
 
 
  const categorie = useFilterStore((state) => state.categorie);
 
  const categoriesList = useFilterStore((state) => state.categoriesList);
 
  const {setCategorie, getCategories} = useFilterStore();


useEffect(() => {
  getCategories()
}, [])


  useEffect(() => {
    setCategorie(selected);
    
  }, [categoriesList]);


const categorieHandler = (val) => {
  setCategorie(val)
 //val = categoria seleccionada

 

}


  return (
    <View style={{ paddingHorizontal: 50 }}>
      <SelectList
        setSelected={(val) => categorieHandler(val)}
        data={categoriesList}
        save="value"
        placeholder="CATEGORIAS"
        searchPlaceholder="Selecciona una categoria"
        dropdownStyles={{
          backgroundColor: "white",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          marginTop: 48,
          zIndex: 8,
        }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
      />

      {categorie ? (
        <Button  title={`X ${categorie}`} onPress={() => setCategorie(null)} />
      ) : null}
    </View>
  );
};
