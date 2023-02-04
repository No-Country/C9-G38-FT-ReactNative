import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = (props) => {

    const {navigation, ...others} = props;

    const handleRedirect = () => {
        navigation.navigate("Profile")
    }

    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleRedirect}>
        <Text>PERFIL</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    backgroundColor: "orange",
    height: 30,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
