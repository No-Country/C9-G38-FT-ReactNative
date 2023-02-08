import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation, route }) => {
  // const { someText } = route.params

  return (
    <SafeAreaView>
      <View>
        {/* <Text>{JSON.stringify(someText)}</Text> */}

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>VOLVER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', { ...route.params })}
        >
          <Text>PROFILE(con .navigate)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push('Profile', { ...route.params })}
        >
          <Text>PROFILE(con .push)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>IR HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
