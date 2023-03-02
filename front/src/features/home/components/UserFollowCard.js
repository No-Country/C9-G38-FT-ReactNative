import { View, Text, StyleSheet, Image } from 'react-native';
import Fonts from '../../../styles/theme/Fonts';
import colors from '../../../constants/colors'
const UserFollowCard = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: item.picture }} style={styles.picture} />
      <Text style={styles.subtitle}>{item.username}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginRight: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: Fonts.type.raleway,
    fontWeight:'bold',
    fontSize: Fonts.size.small,
    color: colors.darkBlue
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 14,
    borderColor: colors.green,
    borderWidth: 2,
  },
});
export default UserFollowCard;
