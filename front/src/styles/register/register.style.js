import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#202020',
    },
    logo: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    logos: {
        flexDirection: 'row',
        margin: 10,
    },
    h2: {
        fontSize: 14,
        color: '#5b5463',
        fontWeight: '500',
        marginBottom: 4,
    },
    input: {
        borderBottomWidth: 1,
        borderRadius: 8,
        margin: 5,
        padding: 3,
        paddingLeft: 10,
        borderColor: '#202020',
    },
    button: {},
})
