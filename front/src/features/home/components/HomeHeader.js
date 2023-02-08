import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useAuthStore } from '../../../store/authStore'

const HomeHeader = () => {
    const logout = useAuthStore(state => state.logout)

    return (
        <View
            style={{
                flex: 0,
                flexDirection: 'row',
                margin: 5,
                border: 1,
                borderRadius: 4,
                padding: 15,
                backgroundColor: '#5192',
            }}
        >
            <View>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '700',
                    }}
                >
                    LOGO APP
                </Text>
            </View>
            <View>
                <Text>Notifications ICON</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => logout()}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    button: {
        backgroundColor: 'orange',
        height: 30,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeHeader
