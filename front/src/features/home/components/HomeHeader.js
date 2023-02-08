import { Text, View, StyleSheet } from 'react-native';
import Fonts from '../../../styles/theme/Fonts';
const HomeHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Bienvenido</Text>
        {/* <Text style={styles.titleUsername}>Carl</Text> */}
      </View>
      {/* <View>
        <Text>Notifications ICON</Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    marginVertical: 28,
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxxxxxLarge,
  },
  titleUsername: {
    margin: 0,
    padding: 0,
  },
});
export default HomeHeader;
