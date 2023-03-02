import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Button } from 'react-native';
import CSButton from '../common/ui/Button';
import colors from '../constants/colors'
import Fonts from '../styles/theme/Fonts';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>Bienvenido a</Text>
      <Text style={styles.title}>Sporteam App</Text>
      <Text style={styles.description}>
        Conocé personas para hacer deportes juntos!
      </Text>
      <View style={styles.startButton}>
        <CSButton
          onPress={() => navigation.navigate('Login')}
          label="Empezar"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  title: {
    marginBottom: 15,
    fontSize: Fonts.size. xxxLarge,
    fontFamily: Fonts.type.sixCaps,
    color: colors.green
  },
  subtitle: {
    fontSize: Fonts.size.xxLarge,
    fontFamily: Fonts.type.sixCaps,
    textAlign: 'center',
    color: colors.green

  },
  description: {
    textAlign: 'center',
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  startButton: {
    width: '90%',
    marginTop: '40%',
    
  },
});
