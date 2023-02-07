import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Button } from 'react-native';

const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>App Info</Text>
            <Text style={{textAlign: 'center'}}>Carrousel or description Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <View style={styles.startButton}>
                <Button title='Empezar' onPress={() => navigation.navigate('Login')} />
            </View>
        </SafeAreaView>
    )
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dedede',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 40
    },
    title: { 
        fontSize: 50, 
        marginBottom: 15 
    },
    startButton: {
        width: '90%', 
        marginTop: '40%'
    }
});