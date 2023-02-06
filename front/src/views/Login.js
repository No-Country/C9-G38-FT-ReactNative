import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Login = (props) => {
  const { navigation, ...others } = props;

  const handleRedirect = () => {
    navigation.navigate("Register")
}

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity style={styles.button} onPress={handleRedirect}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;


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
