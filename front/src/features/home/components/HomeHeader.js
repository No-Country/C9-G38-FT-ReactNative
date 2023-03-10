import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore } from '../../../store/authStore';
import Fonts from '../../../styles/theme/Fonts';
const HomeHeader = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Bienvenido {}</Text>
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
    marginTop: 20,
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
