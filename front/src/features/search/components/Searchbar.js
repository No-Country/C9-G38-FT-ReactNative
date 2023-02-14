import React from 'react'

import { Searchbar } from 'react-native-paper'
import { useUserStore } from '../../../store/userStore'

const SearchbarComponent = () => {
    const { searchbarValue, filterSearchUser } = useUserStore(store => store)

    return (
        <Searchbar
            placeholder='Buscar'
            onChangeText={filterSearchUser}
            value={searchbarValue}
        />
    )
}

export default SearchbarComponent
