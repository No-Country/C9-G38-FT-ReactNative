import { View, Text, StyleSheet, Image } from "react-native";
import Fonts from "../../../styles/theme/Fonts";
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
    marginRight: 10,
    padding: 2,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.small,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 14,
  },
});
export default UserFollowCard;
