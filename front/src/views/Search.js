import { useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import { useUsers } from '../features/search/hooks/useUsers'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
    const { users } = useUsers()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerTitle: 'Search',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        backgroundColor: 'purple',
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'white',
                        }}
                    ></Text>
                </TouchableOpacity>
            ),
            headerSearchBarOptions: {
                placeholder: 'Search',
                onChangeText: event => {
                    searchFilterFunction(event.nativeEvent.text)
                },
            },
        })
    }, [navigation])

    const searchFilterFunction = text => {
        if (text) {
            const newData = data.filter(item => {
                const itemData = item.name.first
                    ? item.name.first.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()

                return itemData.indexOf(textData) > -1
            })
            setFilteredData(newData)
        } else {
            setFilteredData(data)
        }
    }

    return (
        <ScrollView>
            <Text style={styles.textFriends}>Friends:</Text>
            {users.map((user, index) => {
                return (
                    <View styles={styles.itemContainer} key={index}>
                        <Image
                            source={{
                                uri: user.picture.large,
                            }}
                            style={styles.image}
                        />
                        <View>
                            <Text style={styles.textName}>
                                {user.name.first} {user.name.last}
                            </Text>
                            <Text stlye={styles.textEmail}>
                                {user.login.username}
                            </Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    h2: {
        fontSize: 20,
    },
    textFriends: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600',
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: 'gray',
    },
})

export default Search
