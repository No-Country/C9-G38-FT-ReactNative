import { Text, View } from 'react-native'

const HomeHeader = () => {
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
            </View>
        </View>
    )
}

export default HomeHeader
