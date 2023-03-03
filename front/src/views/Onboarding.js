import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CSButton from '../common/ui/Button';
import Fonts from '../styles/theme/Fonts';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
      style={styles.tinyLogo}
          source={{
            uri: 'https://rretta.online/app_logo.png',
          }}
      
      />
      <Text style={styles.title}>SportsApp</Text>
      <Text style={styles.description}>
        AppSports es una aplicación que busca conectar deportistas mediante gustos o deportes en común.

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
    backgroundColor: '#dedede',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  tinyLogo: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 50,
    marginBottom: 15,
    fontSize: Fonts.size.xxxxxLarge,
    fontFamily: Fonts.type.bold,
  },
  description: {
    textAlign: 'center',
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.medium,
  },
  startButton: {
    width: '90%',
    marginTop: '40%',
  },
});
