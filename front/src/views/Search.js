import React, { useEffect } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserStore } from '../store/userStore'
import Searchbar from '../features/search/components/Searchbar'
import FilteredSearch from '../features/search/components/FilteredSearch'

const Search = () => {
    const { users, filteredUsers, getAllUsers } = useUserStore(state => state)

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <SafeAreaView>
            <Searchbar />
            {users === filteredUsers ? (
                <ScrollView>
                    <Text style={styles.textFriends}>Amigos sugeridos:</Text>
                    <FilteredSearch users={users} />
                </ScrollView>
            ) : (
                <ScrollView>
                    <Text style={styles.textFriends}>
                        Usuarios encontrados:
                    </Text>
                    <FilteredSearch users={filteredUsers} />
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textFriends: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default Search
