import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile', { someText: 'PROFILE (DESDE HOME)' })
        }
      >
        <Text>PERFIL</Text>
      </TouchableOpacity>
      <Text
        onPress={() =>
          navigation.navigate('Login', { someText: 'PROFILE (DESDE HOME)' })
        }
      >
        Login
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
