import React from 'react';
import { View, Text } from 'react-native'
import { FilterCategories } from '../features/profile/components';
import { useFilterStore } from '../store/filterStore';



const Search =  () => {


    const categorie = useFilterStore((state) => state.categorie);
       
   
    return (
        <View>







            <Text>Search View</Text>

           

            <Text>Buscar Jugadores:</Text>

            <FilterCategories  />
            <Text>{categorie}</Text>
        
        </View>
    )
}

export default Search
