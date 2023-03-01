import { View, Text, StyleSheet, FlatList } from "react-native";
import Fonts from "../../../styles/theme/Fonts";
import { data } from "../../../constants/data";
import UserFollowCard from "./UserFollowCard";
//
import useFetch from "../../../hooks/useFetch";
import URL from "../../../constants/endpoints";
import { useState, useEffect } from "react";

const UserActivitiesList = () => {
  //
  const [suggested, setSuggested] = useState();
  const connect = useFetch();
  const MySuggested = async () => {
    const resp = await connect({
      url: URL.GET_FIRST_USERS,
      extra: id,
    });
    console.log(resp);
    setSuggested(resp);
  };

  useEffect(() => {
    MySuggested();
    console.log(suggested);
  }, []);
  //
  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>Usuarios con tus mismos intereses:</Text>
      <FlatList
        numColumns={2}
        data={suggested}
        renderItem={({ item }) => <UserFollowCard key={item.id} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginBottom: 76,
  },
  subtitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.large,
  },
});
export default UserActivitiesList;
