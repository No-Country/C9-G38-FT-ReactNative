import React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback, Image } from "react-native";

const CardItem = (props) => {
  const { username, avatar, intereses, id, navigation} = props;

  const interesesArray = intereses.join(" - ");

  const clickHandler = () => {
    navigation.navigate("UserDetail", { id: id });
  };

  return (
    <TouchableWithoutFeedback onPress={clickHandler}>
      <View  style={styles.container}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <View style={styles.info}>
          <Text style={styles.user}>{username}</Text>
          <Text>{interesesArray}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:4,
    marginBottom:6,
    marginTop: 4,
    alignItems: "center",
    borderWidth: 2, 
       borderRadius: 10,
       borderColor: "#878791",
       
  },
  info: {
    marginLeft: 4,
    flexDirection: "column",
    flex: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#7691ca"
  },
  user: {
    fontWeight: "bold",
  },
});

export default CardItem;
