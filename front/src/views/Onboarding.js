import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Button } from 'react-native';
import CSButton from '../common/ui/Button';
import Fonts from '../styles/theme/Fonts';
import colors from '../constants/colors';
import borderRadius from '../constants/borderRadius';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>App Info</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Text>
      <View style={styles.startButton}>
        <CSButton
          style={{ borderRadius: borderRadius, backgroundColor: colors.primary}}
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
  title: {
    fontSize: 50,
    marginBottom: 15,
    fontSize: Fonts.size.xxxxxLarge,
    fontFamily: Fonts.type.bold,
    color: colors.font
  },
  description: {
    textAlign: 'center',
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.medium,
    color: colors.font
  },
  startButton: {
    width: '90%',
    marginTop: '40%',
  },
});
