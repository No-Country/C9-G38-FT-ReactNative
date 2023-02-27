import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Fonts from "../../../styles/theme/Fonts";
const UserFollowCard = ({ item, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("UserDetail", { id: item.id })}
      >
        <Image source={{ uri: item.picture }} style={styles.picture} />
        <Text style={styles.subtitle}>{item.username}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#E8E8E8",
    margin: 4,
    padding: 10,
    borderRadius: 12,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.small,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
});
export default UserFollowCard;
