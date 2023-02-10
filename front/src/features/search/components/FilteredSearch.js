import { View, Text, Image, StyleSheet } from 'react-native'

const FilteredSearch = ({ users }) => {
    return (
        <>
            {users.map((user, index) => {
                return (
                    <View style={styles.itemContainer} key={index}>
                        <Image
                            source={{
                                uri: user.image,
                            }}
                            style={styles.image}
                        />
                        <View>
                            <Text style={styles.textName}>{user.fullname}</Text>
                            <Text style={styles.textEmail}>
                                {user.username}
                            </Text>
                        </View>
                    </View>
                )
            })}
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600',
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
})

export default FilteredSearch
