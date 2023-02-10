import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OptionsList = ({ setOptionsList }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => setOptionsList()} style={styles.container}>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UpdateProfile')}>
                    <Text>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UserPreferences')}>
                    <Text>Preferencias</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
};

export default OptionsList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        right: 0,
        top: 32,
        zIndex: 2
    },
    optionsContainer: {
        backgroundColor: '#ededed',
        width: '50%',
        marginLeft: 'auto',
        borderRadius: 12,
        paddingVertical: 8
    },
    option: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16
    }
});