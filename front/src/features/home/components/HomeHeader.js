import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore } from '../../../store/authStore';
import Fonts from '../../../styles/theme/Fonts';

import colors from '../../../constants/colors'
const HomeHeader = () => {
  const logout = useAuthStore((state) => state.logout);

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
    marginTop: 60,
  },
  title: {
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    fontSize: Fonts.size.xxLarge,
    color: colors.green,
  },
  titleUsername: {
    margin: 0,
    padding: 0,
  },
});

export default HomeHeader;
