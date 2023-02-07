import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../store/authStore';

const Home = ({ navigation, route }) => {

  const logout = useAuthStore(state => state.logout);

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => logout()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
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
