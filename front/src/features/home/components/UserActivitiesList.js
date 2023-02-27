import { View, Text, StyleSheet, FlatList } from "react-native";
import Fonts from "../../../styles/theme/Fonts";
import { data } from "../../../constants/data";
import UserFollowCard from "./UserFollowCard";

const UserActivitiesList = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>Seguidores</Text>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <UserFollowCard key={item.id} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  subtitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxLarge,
  },
});
export default UserActivitiesList;
